import navigationLinks from "@/data/constants/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinksProps {
  navClassName: string;
  linkClassName: string;
}

export default function NavLinks(props: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={props.navClassName}>
      {navigationLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize hover:text-accent transition-all ${
              props.linkClassName
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
