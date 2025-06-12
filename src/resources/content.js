import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Atharv",
  lastName: "Chanana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & Data Science Student | Java Developer",
  avatar: "/images/avatar.jpeg",
  email: "atharvchanana@gmail.com",
  timezone: "Asia/Kolkata", // Timezone for time calculations
  location: "India/New Delhi", // Display location
  education: "Vivekananda Institute of Professional Studies (VIPS)",
  about: "Artificial Intelligence and Data Science student with strong problem-solving skills and expertise in Java development and Data Structures.",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: false, // Newsletter is disabled
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about Artificial Intelligence, Data Science, Java Development, and share my learning journey in technology and problem solving.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/atharvchanana",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/atharvchanana",
  },
  {
    name: "LeetCode",
    icon: "leetcode",
    link: "https://leetcode.com/atharvchanana/",
    color: "#FFA116",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mastering Data Structures & Algorithms for Efficient Problem Solving</>,
  featured: {
    display: false, // Hidden the DSA project badge
    title: <>Check out my DSA Project</>,
    href: "/work/java-dsa-library",
  },
  subline: (
    <>
      I&apos;m Atharv, an AI & Data Science student at VIPS with a strong passion for problem-solving and algorithm design.
      <br /> I specialize in implementing efficient solutions using Data Structures and Algorithms in Java.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Disabled schedule a call button
    link: "#",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <div className="text-s">
        <p>Passionate problem solver with expertise in Data Structures and Algorithms.</p>
        <p>I combine my strong foundation in DSA with modern technologies to build efficient and scalable solutions. 
        Specializing in Java development with a focus on writing clean, optimized code that solves complex 
        computational problems.</p>
      </div>
    ),
  },
  work: {
    display: false, // No professional experience to show yet
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Vivekananda Institute of Professional Studies (VIPS)",
        description: <>B.Tech in Artificial Intelligence and Data Science (2023 - 2027)</>
      }
    ]
  },
  certificates: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "August 2024",
        description: "Completed Google AI Essentials certification to strengthen foundational AI knowledge.",
        credentialUrl: "#", // Add the certificate URL if available
        image: "/images/certificates/google-ai-essentials.jpeg" // Path to the certificate image
      },
      {
        title: "IBM Data Science Professional Certificate",
        issuer: "IBM",
        date: "July 2024",
        description: "Earned IBM's Data Science Professional Certificate, mastering data science and machine learning concepts, tools, and methodologies.",
        credentialUrl: "#", // Add the certificate URL if available
        image: "/images/certificates/ibm-data-science.jpeg" // Path to the certificate image
      }
    ]
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Data Structures & Algorithms",
        description: (
          <>
            Strong command over fundamental and advanced data structures (Arrays, Linked Lists, Trees, Graphs, etc.) and algorithms.
            Proficient in analyzing time and space complexity (Big-O notation) to write optimized solutions.
            Active problem solver on LeetCode, consistently working on improving algorithmic thinking and coding skills.
          </>
        ),
        images: [],
      },
      {
        title: "Java Development",
        description: (
          <>
            Expert in Java programming with deep understanding of OOP principles, Collections Framework, and concurrency.
            Focus on writing clean, efficient, and maintainable code. Experience with Java 8+ features and best practices.
          </>
        ),
        images: [],
      },
      {
        title: "React Development",
        description: (
          <>
            Experience building responsive and interactive user interfaces with React.js.
            Proficient in component-based architecture, hooks, and state management.
            Familiar with modern React features and best practices for building scalable applications.
          </>
        ),
        images: [],
      },
      {
        title: "Problem Solving",
        description: (
          <>
            Strong analytical and problem-solving skills with a systematic approach to breaking down complex problems.
            Experience with various problem-solving patterns like Two Pointers, Sliding Window, and Dynamic Programming.
            Passionate about algorithmic challenges and optimization techniques.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Sharing my learning journey in tech",
  description: `Read about my experiences, learnings, and insights in Java, Data Science, and Software Development`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  display: false, // Temporarily hiding the projects section
  title: `DSA & Problem Solving Projects – ${person.name}`,
  description: `Explore my collection of projects focused on Data Structures, Algorithms, and efficient problem-solving implementations.`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = null; // Gallery is disabled

export { person, social, newsletter, home, about, blog, work, gallery };
