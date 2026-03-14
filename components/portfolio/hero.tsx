'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Avatar and Name Label - Repositioned */}
        <div className="mb-8 flex flex-col items-center gap-3 sm:mb-12">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-gray-900 shadow-md sm:h-24 sm:w-24">
            <Image
              src="/avatar.jpg"
              alt="Muneeb ur Rehman"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="rounded-full bg-white px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
            <p className="whitespace-nowrap text-xs font-medium text-gray-900 sm:text-sm">
              Muneeb ur Rehman
            </p>
          </div>
        </div>

        {/* Main Headline with Embedded Mockup */}
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-balance text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-tight">
            <span>Designing product</span>
            <span className="relative mx-2 inline-block">
              <div className="absolute inset-0 -z-10 rounded-lg bg-gray-100" />
              <div className="relative inline-block h-12 w-32 overflow-hidden rounded-lg bg-gray-50 p-2 sm:h-14 sm:w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-3 w-16 bg-gray-300 rounded"></div>
                    <div className="mt-1 h-2 w-20 bg-gray-200 rounded"></div>
                    <div className="mt-1 h-2 w-14 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </span>
            <span>experiences</span>
            <br />
            <span>that turn complexity into clarity.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            I help startups and product teams simplify workflows, improve usability, and craft interfaces that feel intuitive, scalable, and visually refined.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl sm:px-8 sm:text-base">
            Lets Collaborate
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:shadow-md sm:px-8 sm:text-base"
          >
            View Selected Work
          </Button>
        </div>
      </div>
    </section>
  )
}
