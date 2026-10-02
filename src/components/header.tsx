import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <nav className="mx-auto flex h-25  items-center max-w-7xl justify-between px-3 gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white gap-2">
          N
        </div>
        <Link href="/" className="font-bold text-xl text-rose-600">
          NEXUS
        </Link>
        <div className="flex-1 px-10">
          <Input placeholder="search" />
        </div>
        <div>
          <HeaderAuth />
        </div>
      </nav>
    </header>
  );
};

export default Header;
