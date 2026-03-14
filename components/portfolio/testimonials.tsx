'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      company: 'Sindh Building Authority',
      logo: 'SBA',
      author: 'Gulam Mustafa',
      role: 'Director of SBCA',
      quote: 'The new portal feels intuitive and organized, making daily navigation noticeably faster for our students.',
      avatar: '/testimonial-avatar.jpg'
    },
    {
      id: 2,
      company: 'Strivex',
      logo: 'STRIVEX',
      author: 'Jhon Martin',
      role: 'CEO Strivex',
      quote: 'They deliver pixel-perfect UI/UX every time. Their no-code expertise helped us launch our web app in record time.',
      avatar: '/testimonial-avatar.jpg'
    },
    {
      id: 3,
      company: 'SMIT Learning',
      logo: 'SMIT',
      author: 'Alix Deo',
      role: 'Co Founder SMIT Learning',
      quote: 'The new portal feels intuitive and organized, making daily navigation noticeably faster for our students.',
      avatar: '/testimonial-avatar.jpg'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium text-gray-600">Testimonial</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What it's Like Working Together</h2>
          <p className="mt-4 text-lg text-gray-600">A collaborative process centered on clarity, thoughtful decisions, and meaningful product improvements.</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">{testimonial.company}</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{testimonial.logo}</h3>
              </div>

              <p className="mb-6 leading-relaxed text-gray-700">{testimonial.quote}</p>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl bg-white p-12 text-center sm:p-16">
          {/* Sticky Note Decoration */}
          <div className="mb-8 inline-block">
            <div className="relative h-32 w-40 rounded-lg bg-yellow-300 p-6 shadow-lg" style={{ transform: 'rotate(-12deg)' }}>
              <p className="text-sm font-semibold text-gray-800">Write Your Query Here</p>
            </div>
          </div>

          <h3 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's <span className="font-black">Strengthen Your Product</span> and <br className="hidden sm:inline" /> <span className="font-black">Brand Presence</span>
          </h3>

          <div className="mt-8">
            <Button className="rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800">
              Lets Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
