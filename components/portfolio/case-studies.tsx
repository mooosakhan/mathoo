'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      name: 'SINDH BANK',
      subtitle: 'Fintech Design',
      image: '/project-1.jpg',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'text-green-700'
    },
    {
      id: 2,
      name: 'SBCA',
      subtitle: 'Brand Identity',
      image: '/project-2.jpg',
      bgGradient: 'from-teal-50 to-cyan-50',
      accentColor: 'text-teal-700'
    },
    {
      id: 3,
      name: 'Saylani Alumni',
      subtitle: 'Website Design',
      image: '/project-3.jpg',
      bgGradient: 'from-purple-50 to-indigo-50',
      accentColor: 'text-purple-700'
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-3 text-center">
          <p className="text-sm font-medium text-gray-600">Case Studies</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects That Showcase Real Impact</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.bgGradient} transition-all duration-300 hover:shadow-xl ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ minHeight: '320px' }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={study.image}
                  alt={study.name}
                  fill
                  className="object-cover opacity-50"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-white/10`}></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                {/* Top - Large Project Name */}
                <div className="overflow-hidden">
                  <h3 className={`text-4xl font-bold opacity-15 sm:text-5xl lg:text-6xl ${study.accentColor}`}>
                    {study.name}
                  </h3>
                </div>

                {/* Bottom - Project Info and CTA */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="mb-2 inline-block rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                      <p className="text-xs font-semibold text-gray-700">{study.subtitle}</p>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 sm:text-xl">{study.name}</h4>
                  </div>
                  <Button className="flex-shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow-md transition-all hover:shadow-lg hover:bg-gray-50 sm:px-5 sm:text-sm">
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
