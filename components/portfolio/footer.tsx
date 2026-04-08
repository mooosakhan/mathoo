"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CustomButton } from "./book-a-call-button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion-variants";

export function Footer() {
  return (
    <motion.section 
      className=" pt-16 sm:pt-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: "url(/assets/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CTA Section */}
      <motion.div 
        className="relative rounded-2xl text-center flex items-center justify-center flex-col gap-4 max-w-[896px] mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Sticky Note Decoration */}

        <motion.div 
          className="mb-8 inline-block relative"
          variants={staggerItem}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/assets/footer/chip-input.png" className="w- h-60" />
          <textarea
            spellCheck={false}
            placeholder="Write Your Query Here"
            className="absolute h-40 inset-0 border-none -rotate-10 mt-9 underline-none outline-none bg-transparent px-8 text-[#635c3f] py-2 text-md  resize-none scrollbar-hide"
            style={{ fontFamily: "Caveat" }}
          />
        </motion.div>

        <motion.h3 
          className="mt-8 text-3xl font-medium text-[#a2a3a2] sm:text-4xl"
          variants={staggerItem}
        >
          Let's <motion.span 
            className="text-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Strengthen Your Product
          </motion.span> and{" "}
          <br className="hidden sm:inline" />{" "}
          <motion.span 
            className="text-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Brand Presence
          </motion.span>
        </motion.h3>

        <motion.div 
          className="mt-8 "
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CustomButton text="Let's Collaborate" />
        </motion.div>
      </motion.div>

      {/* Muneeb Text */}
      {/* Muneeb Gradient Text */}
      <motion.div 
        className="relative min-h-[130px] flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="absolute bottom-[-100px] text-[239px] font-semibold leading-none text-center bg-gradient-to-b from-[#EFEFEF] to-[#282828] bg-clip-text text-transparent pointer-events-none select-none">
          Muneeb
        </p>
      </motion.div>
    </motion.section>
  );
}
