import Skill from "../model/Skill";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsItems: Skill[] = [
  {
    icon: <FaHtml5 />,
    name: "HTML 5",
  },
  {
    icon: <FaCss3 />,
    name: "CSS 3",
  },
  {
    icon: <FaJs />,
    name: "JavaScript ",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind.css ",
  },
  {
    icon: <FaReact />,
    name: "React.JS ",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.JS ",
  },
];

export default skillsItems;
