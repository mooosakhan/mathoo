import { StandardCaseStudy } from "@/types/caseStudy";

const studentPortal : StandardCaseStudy= {
  type: "standard",
  slug:"student-portal",
  hero: {
    title: "Student Revamp Portal",
    description:
      "This project focused on improving the usability and structure of a student portal by simplifying complex workflows, clarifying navigation, and creating a scalable interface for both students and administrators.",
    logo: "/assets/case-study/smit-logo.png",

    industry: "Education",
    agency: "Saylani",
    duration: "2 Months",

    chips: ["Product Design", "UI Design", "Web Design"],
    upperfade:"absolute left-0 bottom-10 h-64 w-64 rounded-full bg-linear-to-r from-[#8AC444] via-[#8AC444]/40 to-transparent blur-3xl",
    lowerfade:"absolute right-0 h-54 w-54 rounded-full bg-linear-to-l from-[##0B73B7] via-[#0B73B7]/40 to-transparent blur-3xl"
  },
  overview: {
    description:
      "Before designing solutions, I analyzed how students interacted with the platform to understand where friction occurred. Several workflows required unnecessary steps, navigation lacked clarity, and important information was difficult to find. The redesign focused on restructuring the experience so users could navigate faster and complete tasks with greater confidence.",
    images: ["/assets/work2.jpg", "/assets/work2.jpg"],
  },
  problem: {
    statement:
      "Users struggled to navigate the platform efficiently due to unclear information hierarchy and scattered functionality. Many essential tasks required multiple steps, and important sections were difficult to locate. This resulted in slower task completion, confusion for new users, and an overall experience that felt more complicated than necessary.",
    solution:
      "The solution focused on simplifying navigation, restructuring key workflows, and introducing a clearer interface hierarchy. By reorganizing the platform structure and improving interaction patterns, the redesigned experience allowed users to complete tasks faster while reducing confusion across the system.",
  },
  gallery: [
    { src: "/assets/case-study/cs1/black-rock.jpg", full: true },
    { src: "/assets/case-study/cs1/scene5.jpg" },
    { src: "/assets/case-study/cs1/mackbook-pro.jpg" },
    { src: "/assets/case-study/cs1/m003.jpg", full: true },
    { src: "/assets/case-study/cs1/mobile10.jpg" },
    { src: "/assets/case-study/cs1/scene6.jpg" },
  ],
  goal: "The goal of the redesign was to transform the platform into a structured and intuitive system where users could easily navigate between tasks, access important information quickly, and complete actions without unnecessary friction.",
  personas: [
    {
      id: 1,
      name: "Rana Zaeem",
      image: "/assets/case-study/personas/rana.png",
      role: "SMIT Student",
      age: "20 Years",
      gender: "Male",
      description:
        "The goal of the redesign was to transform the platform into a structured and intuitive system where users could easily navigate between tasks, access important information quickly, and complete actions without unnecessary friction.",
      goal: "Zaeem needs a streamlined portal to easily access course materials, check updates, and track his progress without wasting time searching.",
      frustrations:
        "Zaeem often feels frustrated when important sections are difficult to locate and when simple tasks require navigating through too many screens.",
    },
    {
      id: 2,
      name: "Sidra farooq",
      image: "/assets/case-study/personas/sidra.png",
      role: "Smit Student",
      age: "20 Years",
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
    image: "/assets/quiz.png",
  },
  wireframes: {
    left: [
      "/assets/case-study/cs1/wireframes/left-wireframe-1.png",
      "/assets/case-study/cs1/wireframes/left-wireframe-2.png",
      "/assets/case-study/cs1/wireframes/left-wireframe-3.png",
    ],

    right: [
      "/assets/case-study/cs1/wireframes/right-wireframe-1.png",
      "/assets/case-study/cs1/wireframes/right-wireframe-2.png",
      "/assets/case-study/cs1/wireframes/right-wireframe-3.png",
    ],
  },
  finalDesign:{
    left: [
      "/assets/case-study/cs1/frames/Dashboard.png",
      "/assets/case-study/cs1/frames/Attendence.png",
      "/assets/case-study/cs1/frames/fee.png",
    ],

    right: [
      "/assets/case-study/cs1/frames/progress.png",
      "/assets/case-study/cs1/frames/assignment.png",
      "/assets/case-study/cs1/frames/quiz.png",
    ],
  },
  testing: {
    user: {
      name: "Ahmed Raza",
      image: "/assets/case-study/ahmed.png",
      role: "SMIT Student",
      age: "23",
      gender: "Male",
      chips:["smit student", "23", "male"],
    },

    stats: [
      {
        title: "User Satisfaction",
        value: "92%",
        description: "success rate",
      },
      {
        title: "Task Completion",
        value: "87%",
        description: "Improved hierarchy",
      },
      {
        title: "Time Saved",
        value: "45%",
        description: "Compared to previous",
      },
    ],
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

export default studentPortal;
