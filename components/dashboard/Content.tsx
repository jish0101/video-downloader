"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const Content = ({}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const update = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
      });
      const data = await res.json();
      router.refresh();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-fit p-2 gap-3">
      {isLoading ? (
        "Loading.."
      ) : (
        <>
          <Button variant={"outline"} onClick={update}>
            Update
          </Button>
          <Button
            variant={"default"}
            onClick={() => router.push("/api/auth/signin")}
          >
            Login
          </Button>
          <Button
            variant={"default"}
            onClick={() => router.push("/api/auth/signout")}
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default Content;
