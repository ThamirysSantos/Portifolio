import skillsItems from "@/data/constants/skillsItems";
import { TabsContent } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skills() {
  return (
    <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px text-center xl:text-left">
          <h3 className="text-4xl font-bold">My skills</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] p-2">
          {skillsItems.map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-accent">
                      <p className="capitalize text-primary font-bold">
                        {skill.name}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
}
