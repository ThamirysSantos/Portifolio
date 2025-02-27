"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl p-2">
        Thamy Dev<span className="text-accent">.</span>
      </h1>
    </Link>
  );
}
