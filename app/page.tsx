import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  let getStarted = userId ? "/diary" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The diary mood</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is an app to track mood in a dairy way. All you have to do is to
          log and be honest.
        </p>
        <div>
          <Link href={getStarted}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
