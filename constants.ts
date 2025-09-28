import type {
  Project,
  SkillCategory,
  EducationInfo,
  Certificate,
} from "./src/types";

export const PERSONAL_INFO = {
  name: "Abdal Ahmad",
  title:
    "Software Developer @ Mindsprint | Cross-Platform Developer (React Native)",
  bio: "Results-Driven React Native Developer | 2+ Years of Experience in Cross-Platform Mobile App Development, Performance Optimization & API Integration. Excited to collaborate with dynamic teams to develop innovative solutions and continuously enhance technical expertise through learning and teamwork",
  email: "ahmadabdal675@gmail.com",
  github: "https://github.com/ahmadabdal",
  linkedin: "https://www.linkedin.com/in/abdal-ahmad-7507301a7/",
};
export const PROJECTS: Project[] = [
  {
    title: "Mahadhan Farmer Application",
    description:
      "Cross-platform React Native app built for farmers to access crop advisory, weather forecasts, and a rich-media story module. Implemented Redux for state management, deep linking for content sharing, and CleverTap for advanced analytics—boosting user engagement by 25%.",
    githubUrl: "",
    liveUrl: "",
    stack: [
      "React Native",
      "Redux",
      "React Navigation",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "CleverTap",
    ],
    imageUrl: "/assets/mahadhan_farmer_app.png",
  },
  {
    title: "Inventory & Order Management (B2B)",
    description:
      "In-progress React Native project demonstrating inventory tracking, order workflows, and secure API integration. Focused on clean architecture, performance optimization, and offline-first design for real-world business use.",
    githubUrl: "",
    liveUrl: "",
    stack: [
      "React Native",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
    ],
    imageUrl: "/assets/inventory_order_app.png",
  },
  {
    title: "Weather & Crop Advisory Feature",
    description:
      "Integrated IBM Weather API to deliver a 15-day forecast with hourly updates and built an interactive crop-advisory page providing data-driven recommendations, helping farmers plan cultivation effectively.",
    githubUrl: "",
    liveUrl: "",
    stack: [
      "React Native",
      "Redux",
      "React Navigation",
      "IBM Weather API",
      "Node.js",
      "Express.js",
    ],
    imageUrl: "/assets/weather_crop_advisory.png",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python"],
  },
  {
    title: "Frontend / Mobile",
    skills: [
      "React Native",
      "React.js",
      "Redux",
      "React Navigation",
      "HTML5",
      "CSS3",
      "CleverTap",
      'Firebase'
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "Developer Tools & Services",
    skills: ["Git", "GitHub", "Jira", "Azure DevOps", "Postman"],
  },
];

export const EDUCATION: EducationInfo[] = [
  {
    university: "Manipal University Jaipur",
    location: "Jaipur, Rajasthan, India",
    degree: "Master of Business Administration",
    major: "Analytics and Data Science",
    dates: "2024 – Present",
    gpa: "7.5 / 10.0",
    coursework: [
      "Financial Management",
      "Management Information Systems",
      "Marketing Management",
      "Data Analytics",
      "Business Intelligence",
    ],
  },
  {
    university: "Rajasthan Institute of Engineering and Technology",
    location: "Jaipur, Rajasthan, India",
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    dates: "2019 – 2023",
    gpa: "8.5 / 10.0",
    coursework: [
      "Computer Networks",
      "Database Management Systems",
      "Operating Systems",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Artificial Intelligence & Machine Learning",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "React Native",
    organization: "Coursera",
    date: "Issued Aug 2025",
    credentialUrl:
      "https://coursera.org/share/63f0c278ee950ff091c90f28dcbca820",
    imageUrl: "/assets/certif/react_native.png",
  },
  {
    name: "Version Control",
    organization: "Coursera",
    date: "Issued January 2025",
    credentialUrl:
      "https://coursera.org/share/f88f5be11820f4c2cee1ac071ae1a286",
    imageUrl: "/assets/certif/version_control.png",
  },
  {
    name: "Programming with JavaScript",
    organization: "Coursera",
    date: "Issued October  2023",
    credentialUrl:
      "https://coursera.org/share/6354ee130093f2f43e13fdf5453005e2",
    imageUrl: "/assets/certif/Javascript.png",
  },
  {
    name: "Introduction to Front-End Development",
    organization: "Coursera",
    date: "Issued December 2023",
    credentialUrl:
      "https://coursera.org/share/26c8a2aa8c32c0b9e5579fd98700d71c",
    imageUrl: "/assets/certif/FrontEnd.png",
  },
  {
    name: "Introduction to Mobile Development",
    organization: "Coursera",
    date: "Issued January 2024",
    credentialUrl:
      "https://coursera.org/share/2ec8bef2fe38c4b1b712606e9ae95178",
    imageUrl: "/assets/certif/Introduction_Mobile.png",
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    organization: "Coursera",
    date: "Issued July 2023",
    credentialUrl:
      "https://coursera.org/share/d940647499a41e396efa0e77b074bf18",
    imageUrl: "/assets/certif/BackendNode.png",
  },
];
