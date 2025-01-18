"use client";

// import { useActionState } from "react";
// import { submitContactForm } from "./lib";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageCircle } from "lucide-react";

export default function ContactForm() {
  // const [state, formAction, isPending] = useActionState(submitContactForm, {
  //   errors: {},
  //   message: "",
  // });

  return (
    <form
      action={""}
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input type="text" name="name" placeholder="Your Name" required />
        {/* {state.errors?.name && (
              <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
            )} */}
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="pl-10"
        />
        {/* {state.errors?.email && (
              <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
            )} */}
      </div>

      <div className="relative">
        <MessageCircle className="absolute left-3 top-3 text-gray-400" />
        <Textarea
          name="message"
          placeholder="Your Message (Optional)"
          className="pl-10 min-h-[120px]"
        />
      </div>

      <Button type="submit" className="w-full">
        {/* {isPending ? "Sending..." : "Send Message"} */}
      </Button>

      {/* {state.message && (
            <div
              className={`
              text-center p-3 rounded-md 
              ${
                state.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }
            `}
            >
              {state.message}
            </div>
          )} */}
    </form>
  );
}
