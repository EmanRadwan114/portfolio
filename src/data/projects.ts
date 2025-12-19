import type { IProject } from "@/types/interfaces";
import bubbliImg from "@/assets/imgs/Bubbli Gift Store.png";
import swirloImg from "@/assets/imgs/swirlo.png";
import velvoriaImg from "@/assets/imgs/velvoria.png";
import realScoutImg from "@/assets/imgs/real-scout.png";
import dailyscoopImg from "@/assets/imgs/DailyScoop.png";
import finbizzImg from "@/assets/imgs/finbizz-light.png";
import freshcartImg from "@/assets/imgs/freshcart.png";
import quicknotesImg from "@/assets/imgs/QuickNotes.png";
import yummyImg from "@/assets/imgs/Yummy.png";
import technoImg from "@/assets/imgs/Techno Courses.png";
import mealifyImg from "@/assets/imgs/mealify.png";
import portfolioImg from "@/assets/imgs/portfolio.png";
import alhanaImg from "@/assets/imgs/alhana.png";

export const projects: IProject[] = [
  {
    title: "Bubbli",
    description: `A full-stack gift store offering Google login, secure cookie-based authentication, gift filters, chatbot, payments, and order tracking, along with an admin dashboard for analytics and management.
`,
    img: bubbliImg,
    categories: ["featured", "fullstack"],
    technologies: [
      "React",
      "React Query",
      "Context API",
      "React Router",
      "Formik",
      "Yup",
      "Tailwind CSS",
      "Node",
      "Express",
      "MongoDB",
      "Paymob",
    ],
    githubLink: "https://github.com/EmanRadwan114/bubbli",
    githubBackLink: "https://github.com/EmanRadwan114/bubbli-backend",
    demoLink: "https://bubbli-gifts.netlify.app/",
  },
  {
    title: "Swirlo",
    description: `A full-stack coffee shop e-commerce featuring Google login, secure cookie-based authentication, product
filtering, favorites, a cart, Stripe payments, and order history.
`,
    img: swirloImg,
    categories: ["featured", "fullstack"],
    technologies: [
      "React",
      "React Query",
      "Context API",
      "React Router",
      "Formik",
      "Yup",
      "Material UI",
      "Node",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    githubLink: "https://github.com/EmanRadwan114/swirlo",
    githubBackLink: "https://github.com/EmanRadwan114/swirlo-backend",
    demoLink: "https://swirlo.netlify.app/",
  },
  {
    title: "Velvoria",
    description: `A full-stack furniture e-commerce providing secure cookie authentication, Stripe payment integration, a
smooth user interface, and a comprehensive admin dashboard for product and order management.
`,
    img: velvoriaImg,
    categories: ["fullstack"],
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Node",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    githubLink: "https://github.com/EmanRadwan114/velvoria",
    githubBackLink: "https://github.com/EmanRadwan114/velvoria-backend",
    demoLink: "https://velvoria.netlify.app/home",
  },
  {
    title: "Real Scout",
    description: `A real estate app with Google OAuth, letting users browse properties, view details, and search favorites.
`,
    img: realScoutImg,
    categories: ["featured", "fullstack"],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Context API",
      "Expo Router",
      "NativeWind",
      "AppWrite",
    ],
    githubLink: "https://github.com/EmanRadwan114/real-scout-app",
    demoLink: "https://www.youtube.com/shorts/J_-jsKoLZbw",
  },
  {
    title: "DailyScope",
    description: `A news app with dynamic search, server-side rendering, and optimized image handling.
`,
    img: dailyscoopImg,
    categories: ["next"],
    technologies: ["Next.js", "Bootstrap", "SCSS", "News API"],
    githubLink: "https://github.com/EmanRadwan114/DailyScoop",
    demoLink: "https://shorturl.at/k5U49",
  },
  {
    title: "FreshCart",
    description: `An e-commerce web app featuring user authentication, product management, and Stripe-integrated payments.
`,
    img: freshcartImg,
    categories: ["react"],
    technologies: [
      "React",
      "React Query",
      "Context API",
      "React Router",
      "SASS",
      "Bootstrap",
      "Formik",
      "Yup",
      "React Helmet",
      "Stripe",
    ],
    githubLink: "https://github.com/EmanRadwan114/Fresh-Cart",
    demoLink: "https://fresh-cart-ecommerce.vercel.app/",
  },
  {
    title: "Alhana Restaurant",
    description: `A responsive digital restaurant menu that presents categorized dishes with clear pricing and images, offering intuitive navigation and quick contact options for a seamless user experience across all devices.
`,
    img: alhanaImg,
    categories: ["react"],
    technologies: [
      "React",
      "React Query",
      "Context API",
      "React Router",
      "Material UI",
      "Swiper",
    ],
    githubLink: "https://github.com/EmanRadwan114/alhana-restaurant",
    demoLink: "https://alhana-res.netlify.app/",
  },
  {
    title: "FinBizz",
    description: `A modern and responsive landing page that showcases my ability to convert UI/UX designs into pixel-perfect, production-ready React applications.
`,
    img: finbizzImg,
    categories: ["react", "UI"],
    technologies: [
      "React",
      "TypeScript",
      "SASS",
      "React Query",
      "react-i18next",
    ],
    githubLink: "https://github.com/EmanRadwan114/FinBiz",
    demoLink: "https://finbizz-sass.netlify.app/",
  },
  {
    title: "QuickNotes",
    description: `A note-taking app with secure user accounts and real-time note creation, editing, and search.
`,
    img: quicknotesImg,
    categories: ["react"],
    technologies: ["React", "Context API", "React Router", "SASS", "Bootstrap"],
    githubLink: "https://github.com/EmanRadwan114/QuickNotes",
    demoLink: "https://quick-notes-xi.vercel.app/login",
  },
  {
    title: "Techno Courses",
    description: `A simple landing page for an online courses platform, designed to present key information in a clean and engaging layout.
`,
    img: technoImg,
    categories: ["UI"],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    githubLink: "https://github.com/EmanRadwan114/Techno-Courses",
    demoLink: "https://emanradwan114.github.io/Techno-Courses/",
  },
  {
    title: "Yummy",
    description: `A recipe website that displays meals from an external API, allowing users to explore recipes by category, area, and ingredients with detailed information for each meal.
`,
    img: yummyImg,
    categories: ["UI"],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    githubLink: "https://github.com/EmanRadwan114/Yummy-Website",
    demoLink: "https://emanradwan114.github.io/Yummy-Website/",
  },
  {
    title: "Portfolio",
    description: `A simple and responsive portfolio website designed to showcase personal projects and skills.
`,
    img: portfolioImg,
    categories: ["UI"],
    technologies: ["HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com/EmanRadwan114/Daniels-Portfolio-Website",
    demoLink: "https://emanradwan114.github.io/Daniels-Portfolio-Website/",
  },
  {
    title: "Mealify",
    description: `A single-page restaurant website showcasing menu and information with a clean, responsive design.
`,
    img: mealifyImg,
    categories: ["UI"],
    technologies: ["HTML", "CSS"],
    githubLink: "https://github.com/EmanRadwan114/Mealify",
    demoLink: "https://emanradwan114.github.io/Mealify/",
  },
];
