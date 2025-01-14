"use client";

import stats from "@/data/constants/stats";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((Item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={Item.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text6xl font-extrabold"
                />
                <p
                  className={`${
                    Item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {Item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
