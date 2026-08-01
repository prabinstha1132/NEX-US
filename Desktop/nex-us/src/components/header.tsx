import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl">
          NEXUS
        </Link>
        <div className="flex-1 px-10">
          <Input placeholder="search" />
        </div>
        <div className="flex items-center gap-3">
          <HeaderAuth />
        </div>
      </nav>
    </header>
  );
};

export default Header;
