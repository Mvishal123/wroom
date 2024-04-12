import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Updates = () => {
  return (
    <section className="section-spacing py-32">
      <div className="text-center space-y-10">
        <h1 className="text-4xl font-bold">
          Stay updated about our latest features
        </h1>
        <p>Sign up for our newletter</p>
      </div>
      <div className="relative md:max-w-[70%] mx-auto mt-6">
        <Button className="bg-brand/pink text-white font-semibold absolute right-2 top-2">
          Subscribe ✨
        </Button>
        <Input
          id="subscribe"
          className="py-6 ring-1 ring-white placeholder:text-white pr-[160px]"
          placeholder="Enter your email"
        />
      </div>
    </section>
  );
};

export default Updates;
