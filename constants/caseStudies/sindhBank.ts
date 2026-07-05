import { BankCaseStudy } from "@/types/caseStudy";

const sindhBank : BankCaseStudy = {
  type:"bank",
  slug: "sindh-bank",
  hero: {
    title: "Sindh Bank",
    description:
      "This project aims to redesign Sindh Bank's digital banking experience, creating a modern, user-friendly mobile app. The goal is to meet current fintech standards while ensuring trust and familiarity for existing users.",
    logo: "/assets/case-study/cs4/sb-logo.png",

    industry: "Fintech",
    agency: "Saylani Tech",
    duration: "2 Months",

    chips: ["Product Design", "UI Design", "Web Design"],
    upperfade:"absolute left-0 bottom-10 h-64 w-64 rounded-full bg-linear-to-r from-[#126B38] via-[#126B38]/40 to-transparent blur-3xl",
        lowerfade:"absolute right-0 h-54 w-54 rounded-full bg-linear-to-l from-[#0C4928] via-[#0C4928]/40 to-transparent blur-3xl"


  },
  overview: {
    description: "In today’s digital-first world, users expect banking apps to be fast, simple, and reliable. However, many traditional banking applications still follow outdated interaction patterns, leading to confusion, slow task completion, and poor user satisfaction.In today’s digital world, users want banking apps to be quick, easy, and dependable. Yet, many traditional apps still use outdated designs, causing confusion, delays, and low satisfaction.",
    images: ["/assets//case-study/cs4/final-1.png"],
  },
  problem: {
    statement:
      "Users encounter challenges when handling daily banking tasks because of complex navigation, unclear action hierarchy, slow and fragmented transaction flows, and poor visual clarity with outdated UI patterns. Consequently, they experience friction while trying to complete simple actions such as bill payments, transfers, and mobile top-ups.",
    solution:
      "The solution involved creating a modern, minimal, and action-oriented banking experience that simplifies navigation with a clear structure, introduces quick actions for faster transactions, reduces cognitive load through a clean user interface, and fosters trust with consistent and secure design patterns.",
  },
  gallery: [
    { src: "/assets/case-study/cs4/final-2.jpg", full: true },
    { src: "/assets/case-study/cs4/final-3.jpg" },
    { src: "/assets/case-study/cs4/final-4.jpg" },
    { src: "/assets/case-study/cs4/final-5.jpg", full: true },
    { src: "/assets/case-study/cs4/final-6.jpg" },
    { src: "/assets/case-study/cs4/final-7.jpg" },
  ],
  goal: "To enhance task completion speed and minimize user friction in essential processes, we aim to create a visually modern banking experience. Building user trust is crucial, and we will achieve this through clarity and security. Additionally, our app will align with contemporary fintech UX standards.",
  personas: [
    {
      id: 1,
      name: "Jawad Khan",
      image: "/assets/case-study/cs4/jawad.png",
      role: "Farmer",
      age: "50 Years",
      gender: "Male",
      description:
        "Rana Zaeem frequently uses the portal to access course material, track progress, and manage assignments. He prefers systems that are simple to navigate and allow him to quickly locate the information he needs.",
      goal: "Zaeem needs a streamlined portal to easily access course materials, check updates, and track his progress without wasting time searching.",
      frustrations:
        "Zaeem often feels frustrated when important sections are difficult to locate and when simple tasks require navigating through too many screens.",
    },
    {
      id: 2,
      name: "Kinza Shehzad",
      image: "/assets/case-study/cs4/kinza.png",
      role: "Ecommerce Seller",
      age: "18 Years",
      gender: "Female",
      description:
        "Sidra wants to manage his classes efficiently and communicate with students easily.",
      goal: "Sidra wants a clear and predictable interface where academic information is organized logically and important updates are always easy to find.",
      frustrations:
        "Sidra gets confused when the platform does not clearly highlight important information and when navigation does not reflect the way students naturally think.",
    },
  ],
  analysis: [
    {
      title: "Pain Point",
      description:
        "Users struggled to complete simple tasks because of unclear information and inconsistent navigation.",
    },
    {
      title: "User Case Analysis",
      description:
        "Most users utilized only a few key features, indicating a need to simplify tasks and focus on popular actions.",
    },
    {
      title: "User Behaviour",
      description:
        "The primary users were students who needed quick access to course materials, updates, and progress tracking.",
    },
  ],
  brainstorming: {
    approach:
      "I focused on understanding how students naturally move through academic tasks and identifying opportunities to reduce unnecessary steps in the workflow.",
    solution:
      "Restructure the navigation system, improve content hierarchy, and introduce clearer interface patterns that guide users toward their primary actions.",
    image: "/assets/case-study/cs4/final-1.png",
  },
  wireframes: {
  image: "/assets/case-study/cs4/sb-wireframe.png",
},
  finalDesign: {
  image: "/assets/case-study/cs4/sb-final-design.png",
},
prototype:{
  src:"/assets/case-study/cs4/prototype.jpg"
},
  conclusion:
    "By restructuring navigation, simplifying workflows, and improving interface clarity, the redesigned platform reduced friction and created a more efficient user experience.",
  improvements: [
    {
      title: "Accessibility Enhancements",
      description:
        "Improve accessibility through better contrast, keyboard navigation support, and screen-reader friendly components to ensure the platform works for a wider range of users.",
    },
    {
      title: "Instructor Student Interaction Tools",
      description:
        "Add built-in communication tools that allow instructors to provide direct feedback on assignments and enable students to ask questions without leaving the platform.",
    },
  ],
};
export default sindhBank;
