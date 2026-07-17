"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "./book-a-call-button";
import {
  fadeInDown,
  staggerContainer,
  staggerItem,
} from "@/lib/motion-variants";

export function Hero() {
  return (
    <section className="relative flex w-full items-center justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-4 lg:py-0">
      <div className="pointer-events-none absolute left-0 top-full -mt-20 h-20 w-full bg-gradient-to-b from-transparent to-[#F8F9FA]" />

      <motion.div
        className="flex w-full max-w-6xl flex-col items-center gap-4"
        style={{ isolation: "isolate" }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Avatar & Name */}
        <motion.div
          className="relative h-[120px] w-full max-w-[600px] sm:h-[140px]"
          variants={fadeInDown}
        >
          {/* Avatar */}
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[100px] sm:w-[100px]">
            <motion.div
              className="relative h-20 w-20 overflow-hidden rounded-full shadow sm:h-24 sm:w-24"
              transition={{ duration: 0.8, delay: 0.3 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Image
                src="/assets/avatar.png"
                alt="Muneeb ur Rehman"
                fill
                sizes="(max-width:768px) 80px, 96px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Name Badge */}
          <motion.div
            className="absolute left-[60%] top-[52%] flex h-8 w-[120px] items-center justify-center rounded-[28px] bg-[#F6F6F6] px-3 sm:left-[58%] sm:h-9 sm:w-[137px] lg:left-[314px]"
            style={{
              transform: "rotate(-11.21deg)",
              zIndex: 2,
            }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -11.21 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="w-full text-center text-[10px] font-medium text-gray-700 sm:text-xs">
              Muneeb ur Rehman
            </span>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="overflow-visible px-2 text-center"
          variants={staggerItem}
        >
          <h1 className="tracking-tighter text-[2.25rem] font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[80px]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              Designing product{" "}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block text-black/80"
            >
              experiences
            </motion.span>

            <br />

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block text-black/80"
            >
              that turn complexity into{" "}
              <span className="text-black">clarity.</span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="px-4 text-center"
          variants={staggerItem}
        >
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg">
            I help startups and product teams simplify workflows, improve
            usability, and craft interfaces that feel intuitive, scalable, and
            visually refined.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row"
          variants={staggerItem}
        >
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomButton text="Lets Collaborate" />
          </motion.div>

          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomButton
              text="View Selected Work"
              variant="light"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}