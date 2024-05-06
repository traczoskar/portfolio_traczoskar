import moviesBrowser from "../../../assets/portfolio/portfolio_moviesBrowser.png";
import taskList from "../../../assets/portfolio/portfolio_taskList.png";
import currencyConverter from "../../../assets/portfolio/portfolio_currencyConverter.png";
import personalHomepage from "../../../assets/portfolio/portfolio_personalHomepage.png";
import aiWeatherApp from "../../../assets/portfolio/portfolio_aiWeatherApp.png";
import portfolioPage from "../../../assets/portfolio/portfolio_portfolioPage.png";
import { Project } from "../../../types/types";

export const projects: Project[] = [
  {
    route: "personal-homepage",
    label: "Personal Homepage",
    image: personalHomepage,
    icon: "🏠",
    description:
      "🗒 As a title suggest it's my personal homepage, a virtual CV👨🏻‍💻 You can find here information about me, showcase of my programming skills, what I want to learn, GitHub repositories and contact section.",
    features: [
      {
        name: "About Me 🙋‍♂️",
        content:
          "Interactive section featuring a profile photo and a brief introduction.",
      },
      {
        name: "Theme Switch 🌗",
        content:
          "You can choose between using dark or light mode up to your preferences.",
      },
      {
        name: "Skillset 💪",
        content: "Detailed list of my current tech skills.",
      },
      {
        name: "Learning Goals 🚀",
        content:
          "A forward-looking section about skills I'm actively learning.",
      },
      {
        name: "GitHub Repositories 📁",
        content:
          "Dynamic tiles populated with real-time data from my GitHub repositories using the GitHub API.",
      },
      {
        name: "Contact Section 📩",
        content:
          "Footer section contains my social media links and my e-mail address.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Styled Components",
      "Redux",
      "Redux Saga",
      "Axios",
      "Figma",
      "GitHub API",
      "NPM",
    ],
    whatDidILearn: [
      "🚀 Crafted my own dynamic Personal Homepage and CV, flexing my skills in modern web development and showcasing my projects straight from GitHub.",
      "💡 Learned how to make my site pop with interactive features like dark/light mode switch, real-time GitHub repository tiles, and a contact section for easy reach-out.",
      "⚒️ Got hands-on with a stack of cool tools like React.js, Redux, Styled-components, and Figma, while also mastering error handling for smooth API integration.",
    ],
    repo: "https://github.com/traczoskar/personal_homepage",
    live: "https://traczoskar.github.io/personal_homepage/",
  },
  {
    route: "ai-weather-app",
    label: "AI - Weather App",
    image: aiWeatherApp,
    icon: "🌦️",
    description:
      "🌦️ AI - Weather App is a simple weather application that uses OpenWeatherMap API to fetch weather data for a given city. The app uses a pre-trained model from TensorFlow.js to predict the weather based on the current temperature.",
    tech: [
      "React",
      "OpenAI",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Redux Saga",
      "Vite",
      "NPM",
    ],

    repo: "https://github.com/traczoskar/weatherwise_ai",
    live: "https://traczoskar.github.io/weatherwise_ai/",
  },
  {
    route: "portfolio-page",
    label: "Portfolio Page",
    image: portfolioPage,
    icon: "📁",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/portfolio_traczoskar",
    live: "https://traczoskar.dev",
    description:
      "📁 Portfolio Page is a showcase of my projects. It's a single-page application that allows you to view detailed information about each project, including a description, features, and technologies used.",
  },
  {
    route: "movies-browser",
    label: "Movies Browser",
    image: moviesBrowser,
    icon: "🎬",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/movies-browser",
    live: "https://olgacybulska.github.io/movies-browser/",
    description:
      "🎬 Movies Browser is a simple application that allows you to search for movies and view detailed information about them. The app uses The Movie Database API to fetch movie data.",
  },
  {
    route: "to-do-list",
    label: "To Do List",
    image: taskList,
    icon: "📝",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/to_do_list_react",
    live: "https://traczoskar.github.io/to_do_list_react/",
    description:
      "📝 To Do List is a simple task management application that allows you to add, remove, and mark tasks as completed.",
  },
  {
    route: "currency-calculator",
    label: "Currency Calculator",
    image: currencyConverter,
    icon: "💵",
    tech: ["React", "TypeScript", "Styled Components"],
    repo: "https://github.com/traczoskar/currency_calculator_react",
    live: "https://traczoskar.github.io/currency_calculator_react/",
    description:
      "💵 Currency Calculator is a simple application that allows you to convert currencies using the latest exchange rates fetched from the NBP API.",
  },
];
