import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

export default function Biography() {
  return (
    <div className="text-center xl:text-left">
      <span className="text-xl">Full-Stack Software Developer</span>
      <h1 className="h1 mb-6">
        Hello I`m <br /> <span className="text-accent">Thamirys Gonçalves</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
