"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmittion = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 dark:bg-[#121232] px-10 relative">
      <div className="w-full max-w-lg">
        <h2 className="lg:text-6xl tracking-tight sm:text-5xl dark:text-white text-4xl font-bold text-center mb-4 ">
          Contact Us
        </h2>
        <form onClick={handleSubmittion}>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 bg-white text-black py-5 rounded-md border border-black"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 bg-white text-black py-5 rounded-md border border-black"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <Label>Message</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 bg-white text-black pb-10 rounded-md border border-black"
            itemType="text"
            id="message"
            placeholder="Drop your message"
            required
          />
          <Button className="bg-[#2040A0] text-white text-lg hover:bg-[#233b83] transition-all duration-100 font-semibold rounded-md mb-14">
            Submit
          </Button>
        </form>
        <ShootingStars className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
        <StarsBackground className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      </div>
    </div>
  );
}

export default Contact;
