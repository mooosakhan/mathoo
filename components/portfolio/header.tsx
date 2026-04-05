"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CustomButton } from "./book-a-call-button";
import { fadeInDown, listContainer, listItem } from "@/lib/motion-variants";

export function Header() {
  return (
    <motion.header 
      className="w-full flex items-center justify-center bg-transparent  py-6"
      variants={fadeInDown}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="mx-auto flex flex-row justify-center items-center border border-[5px] border-[#f6f7f7] bg-white gap-7 py-[10px]  px-[8px] rounded-[64px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Home Icon */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            href="#home"
            aria-label="Home"
            className="inline-flex h-10 w-10 items-center justify-center text-gray-800 transition-colors hover:text-gray-900 "
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="homeMask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="1"
                width="24"
                height="25"
              >
                <path d="M24 1.5H0V25.5H24V1.5Z" fill="white" />
              </mask>
              <g mask="url(#homeMask)">
                <path
                  d="M17.79 24.25H6.21C3.47 24.25 1.25 22.02 1.25 19.28V11.87C1.25 10.51 2.09 8.79997 3.17 7.95997L8.56 3.75997C10.18 2.49997 12.77 2.43998 14.45 3.61997L20.63 7.94997C21.82 8.77997 22.75 10.56 22.75 12.01V19.29C22.75 22.02 20.53 24.25 17.79 24.25ZM9.48 4.93997L4.09 9.13997C3.38 9.69997 2.75 10.97 2.75 11.87V19.28C2.75 21.19 4.3 22.75 6.21 22.75H17.79C19.7 22.75 21.25 21.2 21.25 19.29V12.01C21.25 11.05 20.56 9.71997 19.77 9.17997L13.59 4.84997C12.45 4.04997 10.57 4.08997 9.48 4.93997Z"
                  fill="currentColor"
                />
                <path
                  d="M12 20.25C11.59 20.25 11.25 19.91 11.25 19.5V16.5C11.25 16.09 11.59 15.75 12 15.75C12.41 15.75 12.75 16.09 12.75 16.5V19.5C12.75 19.91 12.41 20.25 12 20.25Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          className="h-6 w-px bg-gray-500 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Divider */}

        {/* Social Icons */}
        <motion.nav 
          className="flex items-center gap-3"
          variants={listContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={listItem}>
            <Link
              href="#instagram"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bordertransition-all "
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <mask
                  id="mask0_456_7039"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path d="M24 0H0V24H24V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_456_7039)">
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                    fill="black"
                  />
                  <path
                    d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                    fill="black"
                  />
                  <path
                    d="M17 7.50088C16.87 7.50088 16.74 7.47088 16.62 7.42088C16.5 7.37088 16.39 7.30088 16.29 7.21088C16.2 7.11088 16.12 7.00088 16.07 6.88088C16.02 6.76088 16 6.63088 16 6.50088C16 6.37088 16.02 6.24088 16.07 6.12088C16.13 5.99088 16.2 5.89088 16.29 5.79088C16.34 5.75088 16.39 5.70088 16.44 5.67088C16.5 5.63088 16.56 5.60088 16.62 5.58088C16.68 5.55088 16.74 5.53088 16.81 5.52088C17.13 5.45088 17.47 5.56088 17.71 5.79088C17.8 5.89088 17.87 5.99088 17.92 6.12088C17.97 6.24088 18 6.37088 18 6.50088C18 6.63088 17.97 6.76088 17.92 6.88088C17.87 7.00088 17.8 7.11088 17.71 7.21088C17.61 7.30088 17.5 7.37088 17.38 7.42088C17.26 7.47088 17.13 7.50088 17 7.50088Z"
                    fill="black"
                  />
                </g>
              </motion.svg>
            </Link>
          </motion.div>

          <motion.div variants={listItem}>
            <Link
              href="#twitter"
              aria-label="Twitter / X"
              className="inline-flex h-9 w-9 items-center justify-center text-gray-800 transition-colors hover:text-gray-900"
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <path
                  d="M13.0809 10.712L8.29489 4.002C8.23939 3.92404 8.16604 3.86049 8.08098 3.81666C7.99591 3.77282 7.90159 3.74996 7.8059 3.75H5.2799C5.1698 3.75014 5.06186 3.78057 4.9679 3.83797C4.87394 3.89536 4.79759 3.9775 4.7472 4.07539C4.69681 4.17328 4.67432 4.28315 4.6822 4.39296C4.69009 4.50278 4.72804 4.60831 4.79189 4.698L10.9189 13.288M13.0809 10.712L19.2079 19.302C19.2718 19.3917 19.3097 19.4972 19.3176 19.607C19.3255 19.7169 19.303 19.8267 19.2526 19.9246C19.2022 20.0225 19.1258 20.1046 19.0319 20.162C18.9379 20.2194 18.83 20.2499 18.7199 20.25H16.1939C16.0982 20.25 16.0039 20.2272 15.9188 20.1833C15.8337 20.1395 15.7604 20.076 15.7049 19.998L10.9189 13.288M13.0809 10.712L18.9229 3.75M10.9189 13.288L5.0769 20.25"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>

          <motion.div variants={listItem}>
            <Link
              href="#linkedin"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bordertransition-all "
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <path
                  d="M7 10V17M11 13V17M11 13C11 12.606 11.0776 12.2159 11.2284 11.8519C11.3791 11.488 11.6001 11.1573 11.8787 10.8787C12.1573 10.6001 12.488 10.3791 12.8519 10.2284C13.2159 10.0776 13.606 10 14 10C14.394 10 14.7841 10.0776 15.1481 10.2284C15.512 10.3791 15.8427 10.6001 16.1213 10.8787C16.3999 11.1573 16.6209 11.488 16.7716 11.8519C16.9224 12.2159 17 12.606 17 13V17M11 13V10"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.00802 7H6.99902"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CustomButton />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
