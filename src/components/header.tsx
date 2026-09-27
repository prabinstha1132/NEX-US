import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <nav className="mx-auto flex h-25  items-center max-w-7xl justify-between px-3">
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
