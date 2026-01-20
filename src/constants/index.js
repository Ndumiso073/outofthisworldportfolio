export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
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
  ],
  databases: [
    { name: "MySQL", level: 80, icon: "/assets/logos/mysql.svg" },
    { name: "SQL Server", level: 60, icon: "/assets/logos/sql-serverr.png" },
    { name: "Firebase", level: 85, icon: "/assets/logos/firebase.svg" },
  ],
};

export const experiences = [
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
