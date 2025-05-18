// import { auth } from "@clerk/nextjs";
// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     const { userId } = auth();

//     if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

//     const existingUser = await User.findOne({ clerkId: userId });

//     if (!existingUser) {
//       const user = new User({ 
//         clerkId: userId, 
//         email: req.body.email, 
//         name: req.body.name 
//       });
//       await user.save();
//     }

//     return Response.json({ success: true });
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }



import { auth } from "@clerk/nextjs";
import { connectToDatabase } from "@/lib/mongodb.cjs";
import User from "@/models/User";
import { NextResponse } from "next/server"; // Use NextResponse for API responses

export async function POST(req) {
  try {
    await connectToDatabase();

    // Get authenticated userId from Clerk
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { email, name } = await req.json();

    // Check if user already exists in the database
    let existingUser = await User.findOne({ clerkId: userId });

    // If user doesn't exist, create and save a new user
    if (!existingUser) {
      existingUser = new User({ clerkId: userId, email, name });
      await existingUser.save();
    }

    return NextResponse.json({ success: true, user: existingUser });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
