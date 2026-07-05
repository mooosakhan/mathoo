import {  StandardCaseStudy } from "@/types/caseStudy"

const saylaniAlumni: StandardCaseStudy ={
  type: "standard",
  slug:"saylani-alumni",
  hero: {
    title: "Saylani Alumni",
    description:
      "The platform was designed to help students showcase their skills, connect with industry opportunities, and build professional visibility through a structured and accessible digital experience.",
    logo: "/assets/case-study/cs3/alumni-logo.png",

    industry: "Fintech",
    agency: "Saylani Tech",
    duration: "2 months",

    chips: ["Product Design", "UI Design", "App Design"],
  
        upperfade:"absolute left-0 bottom-10 h-64 w-64 rounded-full bg-linear-to-r from-[#9359FF] via-[#9359FF]/40 to-transparent blur-3xl",
        lowerfade:"absolute right-0 h-54 w-54 rounded-full bg-linear-to-l from-[#9359FF] via-[#9359FF]/40 to-transparent blur-3xl"

  },
  overview: {
    description:
      "Saylani students were acquiring valuable technical skills, yet lacked a centralized platform to showcase their talents professionally. This made it difficult for students to present their work and for industry professionals to find available talent, resulting in a fragmented connection between education and real opportunities. The project aimed to create a platform that bridges this gap with a more organized experience.",
    images: ["/assets/case-study/cs3/home.jpg"],
  },
  problem: {
    statement:
      "Despite having strong technical skills, many students lacked visibility and professional presentation online. Existing systems did not effectively highlight achievements, portfolios, or opportunities in a way that encouraged meaningful industry interaction.",
    solution:
      "The platform was redesigned to showcase students through clear profiles, categorized talent sections, and opportunity-driven layouts that make discovery easier for recruiters and collaborators. The experience focused on clarity, accessibility, and helping students present themselves professionally",
  },
  gallery: [
    { src: "/assets/case-study/cs3/celestial.jpg", full: true },
    { src: "/assets/case-study/cs3/stand.png" },
    { src: "/assets/case-study/cs3/laptop.jpg" },
    { src: "/assets/case-study/cs3/scene2.jpg", full: true },
    { src: "/assets/case-study/cs3/mackbook-air.jpg" },
    { src: "/assets/case-study/cs3/bg-white.png" },
  ],
  goal: "The goal was to create a digital ecosystem where students could confidently showcase their skills, recruiters could discover talent more efficiently, and the overall experience felt structured, trustworthy, and scalable.",
  personas: [
    {
      id: 1,
      name: "Hassan Ali",
      image: "/assets/case-study/cs3/hassan.png",
      role: "Frontend Developer Student",
      age: "22 Years",
      gender: "Male",
      description:
        "Hassan has completed multiple technical courses and wants a platform where he can professionally present his skills and connect with real opportunities.",
      goal: "Hassan wants recruiters and companies to easily discover his profile, skills, and projects without requiring complicated portfolio setup.",
      frustrations:
        "He feels that student achievements often remain unnoticed because there is no centralized platform that professionally showcases talent.",
    },
    {
      id: 2,
      name: "Wajiha Imran",
      image: "/assets/case-study/cs3/wajiha.png",
      role: "Hiring Manager",
      age: "28 Years",
      gender: "Female",
      description:
        "Sarah frequently searches for emerging technical talent but struggles to find structured student profiles and verified skill information.",
      goal: "Sarah wants a platform that allows her to quickly browse student expertise, evaluate portfolios, and identify suitable candidates efficiently.",
      frustrations:
        "Most student platforms lack consistency, making it difficult to compare profiles or understand actual skill levels.",
    },
  ],
  analysis: [
    {
      title: "Pain Point",
      description:
        "Students lacked visibility while recruiters struggled to discover organized talent efficiently.",
    },
    {
      title: "User Case Analysis",
      description:
        "Most interactions centered around browsing profiles, viewing skills, and exploring opportunities.",
    },
    {
      title: "User Behaviour",
      description:
        "Students, alumni, recruiters, startups, and organizations looking to connect with emerging talent.",
    },
  ],
  brainstorming: {
    approach:
      "I focused on understanding how students naturally move through academic tasks and identifying opportunities to reduce unnecessary steps in the workflow.",
    solution:
      "Restructure the navigation system, improve content hierarchy, and introduce clearer interface patterns that guide users toward their primary actions.",
    image: "/assets/case-study/cs3/alumni.jpg",
  },
  wireframes: {
    left: [
      "/assets/case-study/cs3/landingpage-1.jpg",
      "/assets/case-study/cs3/landingpage-2.jpg",
    ],

    right: [
      "/assets/case-study/cs3/landingpage-3.png",
    ],
  },
  conclusion:
    "The redesigned experience transformed the platform into a clearer and more accessible ecosystem where students can present themselves professionally and recruiters can discover talent more efficiently.",
  improvements: [
    {
      title: "AI-Based Talent Recommendations",
      description:
        "Introduce intelligent matching that recommends students to recruiters based on skills, interests, and activity.",
    },
    {
      title: "Portfolio Verification System",
      description:
        "Allow mentors or instructors to validate projects and certifications to improve trust and credibility across profiles.",
    },
  ],
}
export default saylaniAlumni