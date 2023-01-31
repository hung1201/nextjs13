import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-slate-300">
      <Link className="px-2 py-1 bg-white text-blue-500 rounded-lg" href="/">
        Home
      </Link>
      <Link
        className="px-2 py-1 ml-1 bg-white text-blue-500 rounded-lg"
        href="/todos"
      >
        Todos
      </Link>
      <Link
        className="px-2 py-1 ml-1 bg-white text-blue-500 rounded-lg"
        href="/search"
      >
        Search
      </Link>
    </header>
  );
}

export default Header;
