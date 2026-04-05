"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "./book-a-call-button";
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/motion-variants";

export function Hero() {
  return (
    <section 
      className="relative w-full px-2 py-24  sm:px-3 sm:py-32 lg:px-4 lg:py-0 flex items-center justify-center"
    >
      <motion.div 
        className="flex flex-col items-center p-0 gap-4"
        style={{
          isolation: "isolate"
        }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Avatar and Name Label */}
        <motion.div 
          className="relative -900" 
          style={{ width: "600px", height: "140px" }}
          variants={fadeInDown}
        >
          {/* Avatar */}
          <div 
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "100px",
              zIndex: 0,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <motion.div 
              className="relative h-24 w-24 overflow-hidden rounded-full shadow"
              transition={{ duration: 0.8, delay: 0.3 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Image
                src="/assets/avatar.png"
                alt="Muneeb ur Rehman"
                fill
                sizes="(max-width: 768px) 96px, 96px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Name Badge */}
          <motion.div 
            className="absolute flex flex-row justify-center items-center"
            style={{
              width: "137px",
              height: "36px",
              left: "314px",
              top: "59px",
              backgroundColor: "#F6F6F6",
              borderRadius: "28px",
              padding: "10px",
              gap: "10px",
              transform: "rotate(-11.21deg)",
              zIndex: 2
            }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -11.21 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="text-xs flex font-medium text-gray-700 w-full">Muneeb ur Rehman</span>
          </motion.div>
        </motion.div>

        {/* Main Headline with Embedded Mockup */}
        <motion.div 
          className="text-center bg--100 overflow-visible"
          variants={staggerItem}
        >
          <h1 className="tracking-tighter text-[52px] font-semibold leading-normal text-gray-900 sm:text-5xl lg:text-6xl lg:leading-20">
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
              className="text-black/80 inline-block"
            >
              experiences
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-black/80 inline-block"
            >
              that turn complexity into{" "}
              <span className="text-black">clarity.</span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            I help startups and product teams simplify workflows, improve
            usability, and craft interfaces that feel intuitive, scalable, and
            visually refined.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={staggerItem}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CustomButton text="Lets Collaborate" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CustomButton text="View Selected Work" variant="light" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
