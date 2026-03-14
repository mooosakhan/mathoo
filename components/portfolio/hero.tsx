"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full bg-white px-2 py-8 sm:px-3 sm:py-10 lg:px-4 lg:py-12">
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
        </div>

        {/* Main Headline with Embedded Mockup */}
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-balance text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl lg:leading-tight">
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
            I help startups and product teams simplify workflows, improve
            usability, and craft interfaces that feel intuitive, scalable, and
            visually refined.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button className="rounded-3xl border-4 border-gray-200 bg-gray-900 px-3 py-6 text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl  sm:text-base">
            Lets Collaborate
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl border-2 border-gray-300 bg-white px-3 py-6 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:shadow-md  sm:text-base"
          >
            View Selected Work
          </Button>
        </div>
      </div>
    </section>
  );
}
