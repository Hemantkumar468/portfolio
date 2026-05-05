import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "B.Tech in Electronics and Communication Engineering",
    company_name: "Jaypee Institute of Information Technology (JIIT), Noida",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Expected Apr 2027",
    points: [
      "Current CGPA: 8.5 / 10",
      "Completed Class 12 (CBSE) with 92.8%",
      "Completed Class 10 (CBSE) with 90%",
    ],
  },
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Pramyan",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Developed the complete Test/Assessment module of the portal, including Google OAuth authentication, MySQL database schema design, and RESTful API development for all core functionalities using React.js and PHP.",
      "Debugged 25+ JSX component errors across the production codebase, configured Vite build environment, and ensured seamless frontend-backend integration using XAMPP, contributing to a live company project on GitHub.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Anshika is a very good web developer. She has helped me a lot in my projects and learning journey.",
    name: "Hemant Kushwaha",
    designation: "Software Engineer",
    company: "Personal Recommendation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MovieNest",
    description:
      "Built responsive movie platform integrating TMDb API. Added search & trending features improving engagement by 25%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://anxhika.vercel.app/",
  },
  {
    name: "RAG-Based AI Teaching Assistant",
    description:
      "Built a Retrieval-Augmented Generation (RAG) AI assistant that processed 100+ lecture videos and generated 95% accurate transcripts using Whisper. Created a semantic search pipeline with 500+ text chunks and vector embeddings.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai-whisper",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/anxhika/RAG-Based-AI-Teaching-Assistant.git",
  },
  {
    name: "Smart Traffic Management",
    description:
      "Developed a real-time traffic violation detection system using YOLOv5 CNN trained on 4 classes with input size 448×448. Built an automated detection pipeline processing CCTV frames with <100 ms latency.",
    tags: [
      {
        name: "yolov5",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/anxhika/UrbanEye-API-Smart-Traffic-Management-using-Computer-Vision",
  },
];

export { services, technologies, experiences, testimonials, projects };
