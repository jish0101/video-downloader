"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      <div className="flex border p-3 flex-col w-fit">
        <h1 className="font-semibold">Client Component 👀</h1>
        {session ? (
          <>
            <h3>{session.user?.name}</h3>
            <span>{session.user?.email}</span>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={session.user?.image ?? ""}
              alt="User profile"
            />
          </>
        ) : null}
        <Button
          variant={"default"}
          className="text-white text-lg tracking-wider font-medium"
          onClick={() => router.push("/api/auth/signout")}
        >
          Signout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
