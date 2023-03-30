import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    git,
    devops,
    gameDev,
    python,
    sourcecode,
    oop,
    telegram,
    ts,
    unity,
    postgresql,
    golang,  cs, java
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "little bit Backend Developer",
      icon: backend,
    },
    {
      title: "(yet to learn)DevOps",
      icon: devops,
    },
    {
      title: "GameDev",
      icon: gameDev,
    },
  ];
  
  const technologies = [
    {name: "HTML 5",icon: html,},{name: "CSS 3",icon: css, },{name: "JavaScript",icon: javascript,},{ name: "TypeScript",icon: typescript,}, {name: "python", icon: python},
    {name: "cs",icon: cs},  {name: "java",icon:  java},{name: "git",icon: git,},
  
  ];
  
  const experiences = [
    {
      title: "Learning Python in college",
      icon: python,
      iconBg: "#abcdef",
      date: "October 2021 - November 2022",
      points: [
        "Completed all assignments on Python.tutor.ru",
        "Easy calculator ",
        "Took various free courses on stepik"
      ],
    },
    {
      title: "Learning and practicing html+css+js together",
      icon: sourcecode,
      iconBg: "#ffffff",
      date: "April 2022 - June 2022",
      points: [
        "Taking various courses on stepik",
        "Learning flex-boxes through the game ",
        "Writing pages like Uber Eats, Wikipedia and for my college Virtual College Tour",
        "Page creation with bootstrap",
      ],
    },
    {
      title: "Vanilla JS",
      icon: javascript,
      iconBg: "#fde910",
      date: "July 2022 - July 2022",
      points: [
        "Language basics (data types, arrays, arithmetic operations, etc.)",
        "Snake game",
        "Problem solving on LearnJavaScript.ru",
      ],
    },
    {
      title: "SQL + Postgresql",
      icon: postgresql,
      iconBg: "#abcdef",
      date: "October 2022 - December 2022",
      points: [
        "Creating your own database for the store ",
        "draw.io ",
        "taking a course on the stepik", 
        "consolidating information in college",
        "inquiry "
      ],
    },
    {
      title: "Golang, pug and gulp ",
      icon: golang,
      iconBg: "#abcdef",
      date: "December 2022 - December 2022",
      points: [
        "Fundamentals of Golang (stepik course)",
        "My build on Gulp and pug",
      ],
    },
    {
      title: "Telegram bot using ReactJS and Node.js",
      icon: telegram,
      iconBg: "#abcdef",
      date: "November 2022 - present",
      points: [
        "Telegram bot for yourself",
        "Telegram bot for <Armenian Home store>",
  
      ],
    },
    {
      title: "Learning C# and Java in college",
      icon: oop,
      iconBg: "#E6DEDD",
      date: "January - present",
      points: [
        "Language Basics",
        "Arrays, two-dimensional arrays, classes, OOP programming",
        "Games C# in console"
      ],
    },
    {
      title: "Typescript+Next.js+Nest.js+Prisma",
      icon: ts,
      iconBg: "#abcdef",
      date: "February - present",
      points: [
        "Create website app for Welding Work(frontend+backend)",
        "Create website app for online store(frontend+backend)",
        "Learning Typescript, React ts",
      ],
    },
    {
      title: "Unity+C#",
      icon: unity,
      iconBg: "#ffffff",
      date: "March - present",
      points: [
        "The first game is the movement of the ball to the finish line",
        "The second game (in development) - snake 3D",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
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
      name: "Armenian Home Store",
      description:
        "This is an e-commerce site that has a backend and frontend part, a database and a lot of cool stuff",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_code_link: "https://github.com/twers1/E-commerce-v1",
    },
    {
      name: "Telegram bot web app",
      description:
        "This is a telegram bot, using backend and frontend development, the frontend has a web app, and the backend has the logic to establish communication with the frontend",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "yellow-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: oop,
      source_code_link: "https://github.com/twers1/tg-bot-web",
    },
    {
      name: "Snake 3D in Unity",
      description:
        "This is a simple unity snake 3D game, using scripts and models in Blender",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "game",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_code_link: "https://github.com/twers1/my-second-game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  