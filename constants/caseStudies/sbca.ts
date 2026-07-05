import { StandardCaseStudy } from "@/types/caseStudy";

const sbca: StandardCaseStudy = {
  type: "standard",
  slug: "sbca",
  hero: {
    title: "SBCA",
    description:
      "This project focused on digitizing file management workflows by introducing barcode-based tracking, helping departments locate, verify, and manage files with greater accuracy and efficiency.",
    logo: "/assets/case-study/cs2/sbca-logo.png",
    industry: "Education",
    agency: "Saylani",
    duration: "2 Months",

    chips: ["Product Design", "UI Design", "Web Design"],
    upperfade:
      "absolute left-0 bottom-10 h-64 w-64 rounded-full bg-linear-to-r from-[#047857] via-[#047857]/40 to-transparent blur-3xl",
    lowerfade:
      "absolute right-0 h-54 w-54 rounded-full bg-linear-to-l from-[#4C8138] via-[##4C8138]/40 to-transparent blur-3xl",
  },
  overview: {
    description:
      "The organization relied heavily on physical records and multi stage approvals, making file handling difficult to monitor and increasing the effort required to locate and process documents efficiently.As files moved across departments, maintaining visibility over their status became challenging, leading to delays and additional manual follow-ups.",
    images: ["/assets/case-study/cs2/sbca-user-management.png"],
  },
  problem: {
    statement:
      "Manual processes and limited traceability made it difficult to monitor document status and maintain a smooth workflow across departments.",
    solution:
      "The solution focused on creating a centralized workflow that improved visibility, reduced manual effort, and helped departments manage file processing more efficiently.",
  },
  gallery: [
    { src: "/assets/case-study/cs2/scene7.jpg", full: true },
    { src: "/assets/case-study/cs2/scene5.jpg" },
    { src: "/assets/case-study/cs2/sbca-macbook.jpg" },
    { src: "/assets/case-study/cs2/sbca-m003.jpg", full: true },
    { src: "/assets/case-study/cs2/sbca-map.png" },
    { src: "/assets/case-study/cs2/scene6.jpg" },
  ],
  goal: "The goal was to create a reliable system that enables teams to process, verify, and retrieve records with greater efficiency and confidence. By improving visibility and reducing manual dependency, the solution aimed to support smoother and more structured workflows across departments.",
  personas: [
    {
      id: 1,
      name: "Gufran Ali",
      image: "/assets/case-study/cs2/gufran.png",
      role: "Client Office",
      age: "37 Years",
      gender: "Male",
      description:
        "Gufram is responsible for receiving, registering, and processing documents submitted by citizens. His daily work involves coordinating with multiple departments and ensuring that files move through the approval process smoothly while maintaining accurate records.",
      goal: "He wants a more reliable and organized process that helps him locate records quickly and manage file movement with confidence.",
      frustrations:
        "Tracking the status of physical files often requires manual follow-ups, making the process time-consuming and difficult to monitor.",
    },
    {
      id: 2,
      name: "Abdul Rehman",
      image: "/assets/case-study/cs2/rehman.png",
      role: "Verification Officer",
      age: "41 Years",
      gender: "Male",
      description:
        "Abdul handles document verification and reviews files received from different departments. He regularly needs to check the progress and current status of records to ensure approvals are completed on time.",
      goal: "He wants better visibility into file progress so he can complete verifications efficiently and avoid unnecessary delays.",
      frustrations:
        "Limited traceability and dependence on physical records make it difficult to identify where files are and which stage they are currently in.",
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
    image: "/assets/case-study/cs2/sbca-user-management.png",
  },
  wireframes: {
    left: [
      "/assets/case-study/cs2/wireframes/left-wireframe-1.png",
      "/assets/case-study/cs2/wireframes/left-wireframe-2.png",
      "/assets/case-study/cs2/wireframes/left-wireframe-3.png",
    ],

    right: [
      "/assets/case-study/cs2/wireframes/right-wireframe-1.png",
      "/assets/case-study/cs2/wireframes/right-wireframe-2.png",
      "/assets/case-study/cs2/wireframes/right-wireframe-3.png",
    ],
  },
  finalDesign: {
    left: [
      "/assets/case-study/cs2/frames/left-frame-1.png",
      "/assets/case-study/cs2/frames/left-frame-2.png",
      "/assets/case-study/cs2/frames/left-frame-3.png",
    ],

    right: [
      "/assets/case-study/cs2/frames/right-frame-1.png",
      "/assets/case-study/cs2/frames/right-frame-2.png",
      "/assets/case-study/cs2/frames/right-frame-3.png",
    ],
  },
  testing: {
    user: {
      name: "Ashraf Khan",
      image: "/assets/case-study/cs2/ashraf.png",
      role: "Clerk Officer",
      age: "31",
      gender: "Male",
      chips: ["smit student", "23", "male"],
    },

    stats: [
      {
        title: "Work Efficiency",
        value: "87%",
        description: "Improvement",
      },
      {
        title: "Processing speed",
        value: "65%",
        description: "Fast Task Completion",
      },
      {
        title: "Visibility & Confidence",
        value: "92%",
        description: "Positive feedback",
      },
    ],
  },
  conclusion:
    "The redesigned system improved operational visibility, reduced manual dependency, and supported a more structured approach to managing records.",
  improvements: [
    {
      title: "Advanced Reporting & Insights",
      description:
        "Provide analytical dashboards to monitor workflow performance and identify bottlenecks.",
    },
    {
      title: "Enhanced Audit Trails",
      description:
        "Introduce more detailed activity history to strengthen accountability and operational transparency.",
    },
  ],
};
export default sbca;
