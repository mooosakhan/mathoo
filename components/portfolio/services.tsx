'use client'

import Image from 'next/image'

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Product Design',
      image: '/project-1.jpg',
      description: 'End-to-end product design from research to implementation'
    },
    {
      id: 2,
      title: 'Logo Design',
      image: '/project-2.jpg',
      description: 'Brand identity and memorable visual marks'
    },
    {
      id: 3,
      title: 'Social Media Design',
      image: '/project-3.jpg',
      description: 'Engaging social content and brand consistency'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Understand the System',
      description: 'Define the real problem through users, goals, and constraints.'
    },
    {
      number: 2,
      title: 'Structure the Experience',
      description: 'Turn insights into clear flows and purposeful screens.'
    },
    {
      number: 3,
      title: 'Design with Intent',
      description: 'Build scalable interfaces driven by clarity and usability.'
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium text-gray-600">Services</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Where I Create the Most Impact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            I work across product systems, brand identity, and digital communication ensuring everything from interface to logo to social presence feels cohesive and purposeful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium text-gray-600">Process</p>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">How Ideas Turn Into Structured Products</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A clear process that starts with understanding the system, then shaping flows, and finally crafting purposeful, scalable interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Steps */}
            <div className="space-y-8 lg:col-span-2">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-900 bg-white">
                    <span className="text-sm font-bold text-gray-900">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup Image */}
            <div className="flex items-center justify-center lg:col-span-3">
              <div className="relative h-64 w-full sm:h-80">
                <Image
                  src="/project-2.jpg"
                  alt="Design mockup"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
