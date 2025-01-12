"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Logo />
        </div>
        <NavLinks
          navClassName="flex flex-col justify-center items-center gap-8"
          linkClassName="text-xl"
        />
      </SheetContent>
    </Sheet>
  );
}
