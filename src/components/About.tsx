import aboutInfo from "@/data/constants/about";
import { TabsContent } from "./ui/tabs";

export default function About() {
  return (
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">About Me</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[768px] mx-auto xl:mx-0">
          {aboutInfo.map((info, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="text-white/60">{info.fieldName}</span>
                <span className="text-md">{info.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
}
