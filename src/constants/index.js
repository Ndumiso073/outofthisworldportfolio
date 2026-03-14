export const myProjects = [
  {
    id: 1,
    title: "Pongola Cleaning Supplies",
    description:
      "E-commerce platform for Pongola Cleaning Supplies, enabling customers to browse and purchase cleaning products online with domestic delivery.",
    subDescription: [
      "Built a scalable React application integrating secure authentication with MySQL Core Identity and database management using Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS and implemented product filtering, shopping cart, and order management for a seamless user experience.",
      "Developed comprehensive admin dashboard for inventory management and order processing with real-time updates.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "W.I.L Logbook Management System",
    description:
      "A comprehensive role-based platform for managing work-integrated learning placements, digital logbooks, mentor supervision, and HPCSA regulatory compliance for Environmental Health students.",
    subDescription: [
      "Implemented multi-role access control supporting 6 user types with 100+ granular permissions and role-based authorization.",
      "Built digital logbook system with real-time mentor approval workflows and cryptographic signature verification.",
      "Engineered WIL placement workflows including application processing, mentor assignment, and site visit coordination.",
      "Created audit trail system and analytics dashboards for HPCSA compliance reporting and student progress tracking.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Wilsystem.png",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "ASP.NET Core",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Entity Framework",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "SQL Server",
        path: "/assets/logos/sql-serverr.png",
      },
    ],
  },
  {
    id: 3,
    title: "ClosetVault Streetwear Marketplace",
    description:
      "A streetwear and sneaker marketplace platform that combines e-commerce with a personal digital vault, allowing users to shop trending fashion, save items, and receive smarter style-focused recommendations.",
    subDescription: [
      "Designed and developed a modern React-based marketplace experience inspired by premium fashion platforms, with structured category navigation, product discovery flows, and conversion-focused landing pages.",
      "Planned the platform around a multi-seller marketplace model, including product browsing, product detail pages, cart and checkout flows, user authentication, and seller-facing architecture for future scalability.",
      "Introduced the 'Vault' concept as a differentiating feature, enabling users to save favorite streetwear pieces, organize personal style collections, and support personalized recommendations within the shopping experience.",
    ],
    href: "https://closetvault.vercel.app/",
    logo: "",
    image: "/assets/projects/closetvault.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
];
export const myPublications = [
  {
    id: 1,
    title: "Exploring the Impact of LLM Prompting on Students' Learning",
    description:
      "A peer-reviewed research study published in a Q1-ranked journal, investigating how Large Language Model prompting techniques influence student learning outcomes in higher education.",
    subDescription: [
      "Published in Trends in Higher Education, Volume 4, Issue 3, Article 31 (2025).",
      "Conducted comprehensive research on LLM integration in educational contexts.",
      "Analyzed the effectiveness of various prompting strategies on student comprehension.",
      "Contributed to advancing understanding of AI-assisted learning methodologies.",
    ],
    href: "https://doi.org/10.3390/higheredu4030031",
    journal: "Trends in Higher Education",
    year: "2025",
    image: "/assets/projects/research.png",
    tags: [
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+27699364744",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/thaddeus-ndumiso-mndaweni-41635b345/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/ndumisoh.cbongakonke",
    icon: "/assets/socials/instagram.svg",
  },
];

export const skills = {
  languages: [
    { name: "Java", level: 70, icon: "/assets/logos/java.svg" },
    { name: "C#", level: 50, icon: "/assets/logos/csharp.svg" },
    { name: "Python", level: 50, icon: "/assets/logos/python.svg" },
    { name: "JavaScript", level: 85, icon: "/assets/logos/javascript.svg" },
    { name: "React", level: 80, icon: "/assets/logos/react.svg" },
    { name: "HTML/CSS", level: 90, icon: "/assets/logos/html5.svg" },
    { name: "Tailwind CSS", level: 85, icon: "/assets/logos/tailwindcss.svg" },
  ],
  tools: [
    { name: "Visual Studio Code", level: 90, icon: "/assets/logos/vscode2.svg" },
    { name: "Git & GitHub", level: 85, icon: "/assets/logos/git.svg" },
    { name: "Azure DevOps", level: 75, icon: "/assets/logos/azure.svg" },
    { name: "Figma", level: 70, icon: "/assets/logos/figma.svg" },
    { name: "Visual Studio", level: 85, icon: "/assets/logos/vscode.svg" },
    { name: "WordPress", level: 60, icon: "/assets/logos/wordpress.svg" },
  ],
  databases: [
    { name: "MySQL", level: 80, icon: "/assets/logos/mysql.svg" },
    { name: "SQL Server", level: 60, icon: "/assets/logos/sql-serverr.png" },
    { name: "Firebase", level: 85, icon: "/assets/logos/firebase.svg" },
    { name: "MongoDB", level: 70, icon: "/assets/logos/mongodb.svg" },
  ],
};

export const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    job: "Self-Employed",
    date: "2026",
    contents: [
      "Designing and building modern web applications and e-commerce platforms using React, JavaScript, and Tailwind CSS.",
      "Developing personal and portfolio-driven projects focused on clean user experience, responsive design, and scalable architecture.",
      "Creating marketplace and business-oriented systems such as ClosetVault e-commerce and Pongola Cleaning Supplies to strengthen real-world product development skills.",
      "Continuously improving frontend structure, application planning, and full-stack development practices through hands-on project work.",
    ],
  },
  {
    title: "Software Developer Intern",
    job: "Innovations Lab Mangosuthu University of Technology",
    date: "2025-2026",
    contents: [
      "Built and tested production-ready software solutions across diverse development projects.",
      "Debugged complex systems and performed comprehensive testing protocols under supervision.",
      "Developed full-stack applications using Java, C#, React, and modern web technologies.",
      "Conducted research and implementation of cutting-edge development practices.",
      "Provided technical support to students and development teams on infrastructure issues.",
      "Managed databases including MySQL, SQL Server, and Firebase for application data.",
      "Automated testing workflows using Python with white-box testing frameworks.",
      "Implemented modern development practices within structured team methodologies.",
      "Documented technical tasks with precision and maintained development best practices.",
    ],
  },
  
];
export const reviews = [
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
];
