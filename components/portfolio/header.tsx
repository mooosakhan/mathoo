'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-gray-50 to-transparent py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex w-fit items-center gap-6 rounded-full bg-white px-6 py-4 shadow-sm backdrop-blur-sm">
          {/* Social Icons */}
          <nav className="flex items-center gap-4">
            <Link
              href="#behance"
              aria-label="Behance"
              className="inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c4.485 0 8.268-1.998 11-5M12 21c-4.485 0-8.268-1.998-11-5M3 5a2 2 0 012-2h14a2 2 0 012 2M3 5l9-2 9 2M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5" />
              </svg>
            </Link>

            <Link
              href="#instagram"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6a2.25 2.25 0 110-4.5A2.25 2.25 0 0116.5 6zM15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>

            <Link
              href="#twitter"
              aria-label="Twitter"
              className="inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </Link>

            <Link
              href="#linkedin"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </Link>
          </nav>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300" />

          {/* CTA Button */}
          <Button className="rounded-full bg-gray-900 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  )
}
