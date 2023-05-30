import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaUser,
  FaPaperPlane,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { work1, work2 } from '../assets';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialMedia = [<FaLinkedin />, <FaTwitter />, <FaGithub />];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Alex",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "navarro.andujo444@yahoo.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm",
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm",
  },
];

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

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
];

export const workNavs = [
  "All", "Web", "App", "Design"
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "16 Road, TharKayTa , Yangon"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abee02@gmail.com"
  }
];