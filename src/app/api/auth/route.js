import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { userId } = getAuth(req);

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      const userData = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
      }).then(res => res.json());

      user = new User({ clerkId: userId, email: userData.email_addresses[0].email_address });
      await user.save();
    }

    return new Response(JSON.stringify({ message: "User saved", user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
