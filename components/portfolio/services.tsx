"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../reusable/section-header";
import { fadeInUp, listItem } from "@/lib/motion-variants";

export function Services() {
  const services = [
    {
      id: 1,
      title: "Product Design",
      image: "/project-1.jpg",
      description: "End-to-end product design from research to implementation",
    },
    {
      id: 2,
      title: "Logo Design",
      image: "/project-2.jpg",
      description: "Brand identity and memorable visual marks",
    },
    {
      id: 3,
      title: "Social Media Design",
      image: "/project-3.jpg",
      description: "Engaging social content and brand consistency",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Understand the System",
      description:
        "Define the real problem through users, goals and constraints.",
      image: "/assets/process/process1.svg",
    },
    {
      number: 2,
      title: "Structure the Experience",
      description: "Turn insights into clear flows and purposeful screens.",
      image: "/assets/process/process2.svg",
    },
    {
      number: 3,
      title: "Design with Intent",
      description: "Build scalable interfaces driven by clarity and usability.",
      image: "/assets/process/process3.svg",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.section 
      className="bg- py-16 sm:py-24 max-w-[896px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto">
        {/* Services Header */}
        {/* <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium text-gray-600">Services</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Where I Create the Most Impact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            I work across product systems, brand identity, and digital communication ensuring everything from interface to logo to social presence feels cohesive and purposeful.
          </p>
        </div> */}

        {/* Services Grid */}
        {/* <div className="mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </div> */}

        {/* Process Section */}
        <motion.div 
          className="flex flex-col gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              chipText="Process"
              heading="How Ideas Turn Into Structured Products"
              description="A clear process that starts with understanding the system, then shaping flows, and finally crafting purposeful, scalable interfaces."
            />
          </motion.div>

          <div className="flex justify-between items-center w-full bg--200 h-[275px] gap-">
            {/* Steps */}
            <div className="space-y-4 bg--500 min-w-[438px] p-4 rounded-lg">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <motion.div
                    key={step.number}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    layout
                    variants={listItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex items-center gap-2 rounded-full h-[77px] border-[8px] min-w-[438px] border-[#f6f7f7] bg-white px-3 py-2 transition-transform duration-300 ease-out cursor-pointer hover:-rotate-4`}
                    animate={isActive ? { scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" } : { scale: 1, boxShadow: "0 0px 0px rgba(0,0,0,0)" }}
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900"
                      animate={isActive ? { scale: 1.2, backgroundColor: "#000" } : { scale: 1, backgroundColor: "#f3f4f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span 
                        className={`text-xs font-semibold ${isActive ? "text-white" : "text-gray-900"}`}
                        animate={isActive ? { color: "#fff" } : { color: "#111827" }}
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>
                    <div>
                      <h4 className="text-sm text-gray-900 ">
                        {step.title}
                      </h4>
                      <p className="text-xs font-light text-gray-600 sm:text-xs">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mockup Image */}
            <motion.div 
              className="max-h-[275px] overflow-visible"
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                className="object-cover h-full w-full rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
