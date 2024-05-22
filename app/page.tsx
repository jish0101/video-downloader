import { Suspense } from "react";
import Dashboard from "@/components/dashboard/Dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Suspense fallback={"Loading..."}>
        {session && (
          <div className="flex border p-3 flex-col w-fit">
            <h1 className="font-semibold">Server Component</h1>
            <h3>{session.user?.name}</h3>
            <span>{session.user?.email}</span>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={session.user?.image ?? ""}
              alt="User profile"
            />
          </div>
        )}
        <Dashboard />
      </Suspense>
    </main>
  );
}
