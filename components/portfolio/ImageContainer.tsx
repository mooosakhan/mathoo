"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCards from "./TestimonialCards";
import { Variant, testimonialVariant } from "@/lib/motion-variants";
import { testimonialCards } from "@/constants/testimonialcards";

export default function ImageContainer() {
  return (
    <section className="w-full max-w-4xl mx-auto flex items-center justify-center px-4 sm:px-0">
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-5">
        {/* First Container */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative h-[330px] w-[500px] max-w-full overflow-hidden rounded-xl bg-white"
        >
          {/* Left */}
          <motion.div
            variants={Variant}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-4 sm:left-8 top-6 h-full w-[120px] sm:w-[180px] overflow-hidden rounded-xl"
          >
            <Image
              src="/assets/work1.png"
              alt=""
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            variants={Variant}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-6 right-4 sm:right-8 h-full w-[120px] sm:w-[180px] overflow-hidden rounded-xl"
          >
            <Image
              src="/assets/work1.png"
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </motion.div>

          <motion.div
            variants={testimonialVariant}
            className="absolute bottom-5"
          >
            <TestimonialCards {...testimonialCards[0]} />
          </motion.div>
        </motion.div>

        {/* Second Container */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative h-[330px] w-[500px] max-w-full  overflow-hidden rounded-xl bg-white"
        >
          {/* Left */}
          <motion.div
            variants={Variant}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-10 h-full w-[140px] sm:w-[200px] rounded-xl overflow-hidden"
          >
            <Image
              src="/assets/work2.jpg"
              alt=""
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            variants={Variant}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 right-0 h-full w-[200px] sm:w-[280px] rounded-xl overflow-hidden"
          >
            <Image
              src="/assets/work2.jpg"
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </motion.div>

          <motion.div
            variants={testimonialVariant}
            className="absolute bottom-5"
          >
            <TestimonialCards {...testimonialCards[1]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}