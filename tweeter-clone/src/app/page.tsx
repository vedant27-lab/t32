'use client';

import { useSession } from "next-auth/react";
import NewTweet from "../components/NewTweet";

export default function Home() {
  return (
    <div>
      <NewTweet />
      {/* Other content */}
    </div>
  );
}
export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not signed in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      {/* Your app content goes here */}
    </div>
  );
}