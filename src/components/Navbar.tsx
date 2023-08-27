import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-5 p-2">
      <Link href="/">
        <h1 className="text-3xl font-bold">Tasks</h1>
      </Link>
      <Link href="new">
        <button
          className="bg-cyan-500 px-3 py-1 rounded-md shadow-lg shadow-cyan-500/50
          active:translate-y-[1px] active:scale-[0.98] duration-300 font-bold"
        >
          New
        </button>
      </Link>
    </nav>
  )
}
