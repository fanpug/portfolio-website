import {
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaCss3Alt,
  FaSass,
  FaFigma,
  FaUser,
  FaPaperPlane,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaAws,
  FaPython,
  FaDocker
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { work1, work2, work3 } from '../assets';

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "skills",
    title: "Habilidades",
  },
  {
    id: "portfolio",
    title: "Portafolio",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const socialMedia = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/humberto-alejandro-n-2a65a0a6/"
  }, 
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/navarro_dev"
  }, 
  {
    icon: <FaGithub />,
    link: "https://github.com/fanpug"
  }
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Nombre",
    value: "Humberto Navarro",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "navarro.andujo444@yahoo.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    key: "Ubicación",
    value: "Chihuahua, México",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaNodeJs />,
  <SiTypescript />,
  <FaReact />,
  <SiNextdotjs />,
  <FaSass />,
  <SiTailwindcss />,
  <FaPython />,
  <DiJava />,
  <TbSql />,
  <SiMongodb />,
  <SiFirebase />,
  <FaFigma />,
  <FaAws />,
  <FaDocker />,

];

export const experiences = [
  {
    id: 1,
    year: "2019",
    position: "Artista del Sandwich",
    company: "Subway",
  },
];
/*
export const flavorNumbers = [
  {
    id: 1,
    number: "6+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served",
  },
];
*/
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Modern Bank App Design",
    category: "web",
    repo: "https://github.com/fanpug/bank-modern-app",
    view: "https://bank-modern-app-fanpug.vercel.app/"
  },
  {
    id: 2,
    img: work2,
    name: "To-Do List App",
    category: "web",
    repo: "https://github.com/fanpug/react-todo-app",
    view: "https://react-todo-app-43dac.web.app/"
  },
  {
    id: 3,
    img: work3,
    name: "Administración de Ligas de Fútbol",
    category: "diseño",
    repo: "https://github.com/a329782/UXProjectApp",
    view: "https://github.com/a329782/UXProjectApp"
  },
];

export const workNavs = [
  "Todos", "Web", "Diseño"
];

export const contacts = [
  {
    id: 1,
    icon: <FaPaperPlane />,
    infoText: "navarro.andujo444@yahoo.com"
  }
];