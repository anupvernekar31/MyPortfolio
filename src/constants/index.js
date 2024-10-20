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
  threejs,
  quicken,
  samsung,
  java,
  sql,
  ramaiah,
  josephs,
  premier,
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
    title: "Web Developer (React)",
    icon: web,
  },
  {
    title: "Mobile Developer (React Native)",
    icon: mobile,
  },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
];

const experiences = [
  {
    title: "Software Engineer - II",
    company_name: "Quicken Inc, Bengaluru",
    icon: quicken,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      "Successfully implemented the Credit Score feature for company’s flagship product Simplifi, resulting in a 20% increase in user engagement and a 15% rise in customer satisfaction ratings.",
      "Introduced Redux for state management in the mobile application, resulting in a 30% reduction in app load times and a 25% decrease in crash rates, leading to enhanced user experience.",
      "Migrated the JavaScript code base to TypeScript, resulting in a increase in development efficiency and reduction in code base maintenance efforts.",
      "Conducted code reviews & provided guidance to junior developers, ensuring code quality & adherence to best practices.",
    ],
  },
  {
    title: "Software Engineer - I",
    company_name: "Quicken Inc, Bengaluru",
    icon: quicken,
    iconBg: "#383E56",
    date: "July 2022 - September 2023",
    points: [
      "Assisted the team in developing and maintaining the React-based web applications, ensuring that they were performant, scalable, and user-friendly.",
      "Refactored Class-Based Components to Functional Components to improve code readability, maintainability, and performance, leveraging React Hooks for state and lifecycle management.",
      "Collaborated with product managers, designers, and other developers to define requirements and develop solutions that met business needs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Quicken Inc, Bengaluru",
    icon: quicken,
    iconBg: "#383E56",
    date: "January 2022 - July 2022",
    points: [
      "Developed the landing page for the Companion Web Application.",
      "Identified and resolved 50+ critical bugs within the production code base, resulting in a 30% improvement in software stability and functionality.",
      "Familiarized myself with the codebase, gaining a comprehensive understanding of the web application's architecture.",
      // "During my internship, I had the privilege of collaborating closely with senior developers and designers within the team. This invaluable experience provided me with firsthand exposure to the principles of sound coding practices and established conventions within the industry.",
      // "I successfully resolved numerous bugs within the production code, contributing to the enhancement of software stability and functionality.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Samsung Reasearch & Development, Bengaluru",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "July 2020 - March 2021",
    points: [
      "Imposed artistic styles on streaming applications in mobile environment.",
      "Implemented various styles in different video streaming applications & changed the view of the streaming videos to improveuser experience.",
    ],
  },
];

const projects = [
  {
    name: "SwiftWheelz - Rental Service",
    description:
      "Hybrid Mobile App that allows users to search, book, and manage car rentals, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React-Native",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-Sagas",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "MoneyMate - Expense Tracker",
    description:
      "A comprehensive expense tracking solution that allows users to track and categorize expenses, visualize spending patterns with interactive charts.",
    tags: [
      {
        name: "React-Native",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Realm",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "FarmEasy - Farmer's Market ",
    description:
      "Web based multi tiered application to connect farmers and the buyers to bid their products online with necessary CRUD functionalities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "KwikLyric - Lyrics Retrieval System ",
    description:
      "A domain-specific search engine where a user can enter song lyrics he/she vaguely remembers. A list of songs is displayed with complete lyrics along with their accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
];

const education = [
  {
    name: "Ramaiah Institute of Technology, Bengaluru",
    major: "Bachelor of Engineering, Computer Science",
    grade: "9.42 CGPA",
    icon: ramaiah,
    iconBg: "#E6DEDD",
    date: "August 2018 - June 2022",
    points: [
      "I have pursued a Bachelor's degree in Computer Science and Engineering at Ramaiah Institute of Technology, Bengaluru. I have completed my degree and have a CGPA of 9.41. I had taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I was also a member of a club called CodeRIT, where I am learned and worked on exciting projects with a team of talented developers.",
    ],
  },
  {
    name: "Premier Science & Commerce PU College, Karwar",
    major: "Computer Science",
    grade: "96.16%",
    icon: premier,
    iconBg: "#E6DEDD",
    date: "August 2016 - June 2018",
    points: [
      "I completed my PU education at Premier Science & Commerce PU College, Karwar, where I studied Science with Computer Science.",
    ],
  },
  {
    name: "St. Joseph's High School, Karwar",
    major: "Maths, Science, Social Science ",
    grade: "98.40%",
    icon: josephs,
    iconBg: "#E6DEDD",
    date: "August 2013 - June 2016",
    points: [
      "I completed my 10th education at St. Joseph's High School, Karwar, where I studied in state board with Maths, Science & Social Science as subjects.",
    ],
  },
];

const Bio = {
  name: "Anup Vernekar",
  roles: [
    "Full Stack Developer",
    "Mobile Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/anupvernekar31",
  resume:
    "https://drive.google.com/file/d/10CPABfCTluV5r_HU1PitLY4GVZSi2nfS/view",
  linkedin: "https://www.linkedin.com/in/anupvernekar/",
  twitter: "https://twitter.com/anupvernekar31",
  insta: "https://www.instagram.com/a__noob__/",
  facebook: "https://www.facebook.com/anup.vernekar.33/",
};

export { services, technologies, experiences, projects, education, Bio };
