import { Persona } from "@/components/reusable/PersonaCard";

export type StandardCaseStudy = {
  type: "standard";
  slug: string;

  hero: {
    title: string;
    description: string;
    logo: string;

    industry: string;
    agency: string;
    duration: string;

    chips: string[];
    upperfade: string;
    lowerfade:string
  };

  overview: {
    description: string;
    images: string[];
  };

  problem: {
    statement: string;
    solution: string;
  };

  gallery: {
    src: string;
    full?: boolean;
  }[];

  goal: string;

  personas: Persona[];

  analysis: {
    title: string;
    description: string;
  }[];

  brainstorming: {
    approach: string;
    solution: string;
    image: string;
  };

  wireframes?: {
    left: string[];
    right: string[];
  };

  finalDesign?: {
    left: string[];
    right: string[];
  };

  testing?: {
    user: {
      name: string;
      image: string;
      role: string;
      age: string;
      gender: string;
      chips: string[];
    };

    stats: {
      title: string;
      value: string;
      description: string;
    }[];
  };

  conclusion: string;

  prototype?: {
    src: string;
  };

  improvements: {
    title: string;
    description: string;
  }[];
};

export type BankCaseStudy = {
  type: "bank";

  slug: string;

  hero: StandardCaseStudy["hero"];
  overview: StandardCaseStudy["overview"];
  problem: StandardCaseStudy["problem"];
  gallery: StandardCaseStudy["gallery"];
  goal: StandardCaseStudy["goal"];
  personas: StandardCaseStudy["personas"];
  analysis: StandardCaseStudy["analysis"];
  brainstorming: StandardCaseStudy["brainstorming"];

  wireframes?: {
    image: string;
  };

  finalDesign?: {
    image: string;
  };

  testing?: StandardCaseStudy["testing"];

  conclusion: string;

  prototype?: {
    src: string;
  };

  improvements: StandardCaseStudy["improvements"];
};

export type CaseStudy = StandardCaseStudy | BankCaseStudy;
