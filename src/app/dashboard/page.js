"use client"
import { useUser, UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <p>Please sign in to access the dashboard.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user.email}</h1>
      <UserButton />
    </div>
  );
}
