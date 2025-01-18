"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="flex flex-col items-center p-10">
        <h3 className="text-4xl text-accent">Let`s work together</h3>
        <p className="text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] p-4">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <ContactForm />
            {/* <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              
              {/* Input */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="example@email.com" />
                <Input type="phone" placeholder="+55 (99) 99999-9999" />
              </div> */}
            {/* </form> */}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.div>
  );
}
