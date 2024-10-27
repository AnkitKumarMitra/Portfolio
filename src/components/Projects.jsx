import { useTheme } from "../hooks/useTheme";

const projectDetails = [
  {
    id: 1,
    title: "SimpAnime",
    description:
      "A simple Anime Streaming Platform that offers free streaming of anime content, including TV shows, movies, and OVAs, in various genres such as action, romance, comedy, and more.",
    image: "/SimpAnime.png",
    link: "https://github.com/AnkitKumarMitra/SimpAnime",
    stacks: ["REACT", "Rrestul API"],
  },
  {
    id: 2,
    title: "Country Details Website",
    description:
      "A simple website made using REACT and a restful API to search country flags and get their details.",
    image: "/CD-img.png",
    link: "https://github.com/AnkitKumarMitra/Countris-Details",
    stacks: ["REACT", "Rrestul API"],
  },
  {
    id: 3,
    title: "Nourish Together",
    description:
      "Built a web application that connects canteens with people in need, achieving approximately 35% reduction in food waste. Implemented efficient matching algorithms and real-time notifications, increasing food redistribution efficiency by 50%",
    image: "/nt-img.png",
    link: "https://github.com/AnkitKumarMitra/Nourish-Together",
    stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJs",
      "Express",
      "Restful APIs",
      "PostgreSQL",
      "EJS",
    ],
  },
  {
    id: 4,
    title: "FoodFolio",
    description:
      "Engineered an application for efficient storage and management of personal food recipes, enhancing user experience by 40%. Integrated cloud advanced search functionalities, boosting recipe retrieval speed by 60%.",
    image: "/FF-img.png",
    link: "https://github.com/AnkitKumarMitra/FoodFolio",
    stacks: ["Flutter", "Django", "SQLite"],
  },
  {
    id: 5,
    title: "The Anime Database",
    description:
      "A comprehensive hub for anime enthusiasts, offering a one-stop solution for discovering, tracking, and exploring anime content. Your ultimate destination for all things anime-related.",
    image: "/project-1.png",
    link: "https://github.com/AnkitKumarMitra/Anime-Database",
    stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJs",
      "Express",
      "Restful APIs",
      "PostgreSQL",
      "EJS",
    ],
  },
  {
    id: 6,
    title: "Simple Blogging Website",
    description:
      "Experience a minimalist blogging haven crafted from scratch! This user-friendly website, built with HTML, CSS, and JavaScript for the frontend and Node.js for the backend, ensures seamless content creation. Offering clean aesthetics and user authentication, it prioritizes readability and functionality.",
    image: "/project-2.png",
    link: "https://github.com/AnkitKumarMitra/Simple-Bloggin-Website",
    stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJs",
      "Express",
      "Restful APIs",
      "EJS",
    ],
  },
  {
    id: 7,
    title: "Simple To-Do list",
    description:
      "A straightforward todo list app made with HTML, CSS, and JavaScript on the front-end and back-end by Node.js with a database PostgreSQL, this app is designed for easy task organization. Enjoy a simple, clean interface and efficient task management.",
    image: "/project-3.png",
    link: "https://github.com/AnkitKumarMitra/Simple-To-Do-List",
    stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "EJS",
    ],
  },
];

export default function Projects() {
  const [isDark] = useTheme();

  return (
    <main className={`projects-container ${isDark ? "dark" : ""}`}>
      <h1>My Projects</h1>

      {projectDetails.map((project) => (
        <div
          key={project.id}
          className={`project-card ${
            project.id % 2 === 0 ? "project-2" : "project-1"
          }`}
        >
          <a href={project.link} target="_blank">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
          </a>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={`stacks ${isDark ? "dark" : ""}`}>
              {project.stacks.map((stack, index) => (
                <p key={index}>{stack}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
