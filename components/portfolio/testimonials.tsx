"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "../reusable/section-header";
import { listContainer, listItem, fadeInUp } from "@/lib/motion-variants";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      company: "Sindh Building Authority",
      logo: "/assets/testimonial/sbca-logo.png",
      author: "Gulam Mustafa",
      role: "Director of SBCA",
      quote:
        "The new portal feels intuitive and organized, making daily navigation noticeably faster for our students.",
      avatar: "/assets/testimonial/user-sbca.png",
    },
    {
      id: 2,
      company: "Strivex",
      logo: "/assets/testimonial/strivex-logo.png",
      author: "Jhon Martin",
      role: "CEO Strivex",
      quote:
        "They deliver pixel-perfect UI/UX every time. Their no-code expertise helped us launch our web app in record time.",
      avatar: "/assets/testimonial/user-strivex.png",
    },
    {
      id: 3,
      company: "SMIT Learning",
      logo: "/assets/testimonial/smit-logo.png",
      author: "Alix Deo",
      role: "Co Founder SMIT Learning",
      quote:
        "The new portal feels intuitive and organized, making daily navigation noticeably faster for our students.",
      avatar: "/assets/testimonial/user-smit.png",
    },
  ];

  return (
    <motion.section 
      className="bg-gray-50  max-w-[957px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            chipText="Testimonial"
            heading="What it's Like Working Together"
            description="A collaborative process centered on clarity, thoughtful decisions, and meaningful product improvements."
          />
        </motion.div>

        <motion.div 
          className=" grid grid-cols-1 gap-0 sm:grid-cols-3 max-w-[896px] h-[269px] mx-auto border border-[10px] border-[#f6f7f7] bg-white rounded-[12px] "
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="relative p-[15px] h-full overflow-visible flex flex-col justify-between"
              variants={listItem}
              whileHover={{ backgroundColor: "#f0f0f0" }}
              // transition={{ type: "spring", stiffness: 300 }}
            >
              {/* divider (skip last item) */}
              {i !== testimonials.length - 1 && (
                <motion.div 
                  className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}

              <motion.div 
                className="flex gap-2 items-center justify-start overflow-visible"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <motion.img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className={`${testimonial.id === 2 ? "" : testimonial.id == 3 ? "h-[28px]" : "w-[28px] h-[28px]"} object-cover rounded-full`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <p className="text-[10px] font-base text-gray-500 max-w-25 leading-3">
                  {testimonial.id != 3 ? testimonial.company : null}
                </p>
              </motion.div>

              <motion.p 
                className="text-gray-900 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              >
                {testimonial.quote}
              </motion.p>

              <motion.div 
                className="flex items-center justify-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 * i }}
              >
                <motion.div 
                  className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-[28px] h-[28px] object-cover rounded-full"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-900">{testimonial.author}</p>
                  <p className="text-[10px] text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
