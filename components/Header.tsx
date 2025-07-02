"use client";

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b p-4">
      <Link href="/" className="text-xl font-bold">CopyFlow</Link>
    </header>
  );
}