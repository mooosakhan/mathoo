'use client'

import Image from 'next/image'

export function Works() {

  const projects = [
    {
      id: 1,
      title: 'Effortless Finance',
      image: '/project-1.jpg',
      category: 'Finance',
      client: {
        name: 'Jhon Martin',
        title: 'CEO Strivex',
        avatar: '/testimonial-avatar.jpg',
        rating: 5.0,
        quote: 'Muneeb delivered a refined, high converting landing page that elevated our fintech brand and improved sign-ups.'
      }
    },
    {
      id: 2,
      title: 'Design System Platform',
      image: '/project-2.jpg',
      category: 'Design',
      client: {
        name: 'Alix Deo',
        title: 'Co Founder SMIT Learning',
        avatar: '/testimonial-avatar.jpg',
        rating: 5.0,
        quote: 'The new portal feels intuitive and organized, making daily navigation noticeably faster for our students.'
      }
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium text-gray-600">Selected Work</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How That Thinking Translates Into Work</h2>
          <p className="mt-4 text-lg text-gray-600">Each project reflects structured problem-solving, improved navigation clarity, and interfaces built around real user needs.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Project Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col">
                {/* Title and Category */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{project.title}</h3>
                </div>

                {/* Client Testimonial */}
                {project.client && (
                  <div className="flex flex-1 flex-col justify-end border-t border-gray-200 pt-6">
                    {/* Client Avatar and Info */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <Image
                          src={project.client.avatar}
                          alt={project.client.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-900">{project.client.name}</p>
                        <p className="truncate text-xs text-gray-600">{project.client.title}</p>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-1">
                        <span className="text-sm font-semibold text-gray-900">{project.client.rating}</span>
                        <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">{project.client.quote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
