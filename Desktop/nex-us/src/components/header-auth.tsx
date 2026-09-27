"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import * as actions from "../actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode; //Create a variable called authContent, and its type is React.ReactNode.

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar>
              <AvatarImage src={session.data.user.image || ""} alt="profile" />
              <AvatarFallback>
                {session.data.user.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-40">
          <form action={actions.signOut}>
            <Button type="submit" className="w-full">
              Sign Out
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <form action={actions.signIn}>
        <Button type="submit" variant="outline">
          Sign In
        </Button>
      </form>
    );
  }

  return authContent;
}
