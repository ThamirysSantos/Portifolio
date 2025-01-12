import Link from "next/link";
import DesktopNav from "./DesktopNav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
