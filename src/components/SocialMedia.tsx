import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/ThamirysSantos" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/thamirysgoncalves",
  },
];

export interface SocialMediaProps {
  containerStyle: string;
  iconStyle: string;
}

export default function SocialMedia(props: SocialMediaProps) {
  return (
    <div className={props.containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link href={item.link} key={index} className={props.iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
