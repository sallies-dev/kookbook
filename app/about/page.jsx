import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="min-h-dvh p-5">
      <section className="grid lg:grid-cols-2 gap-3 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-gray-900">Who We Are</h1>
          <p> Welcome to Kookbook — your digital kitchen companion!</p>
          <p>
            We created Kookbook with a simple idea: to make cooking easier, more
            enjoyable, and accessible to everyone. Whether you're a home cook
            experimenting for the first time or a seasoned foodie looking to
            organize your favorite recipes, Kookbook is here to help. Our
            platform lets users discover, create, and share delicious recipes
            from around the world. With step-by-step instructions, ingredient
            lists, and helpful tips, Kookbook makes it easy to plan meals, try
            new dishes, and keep all your culinary creations in one place.
          </p>
          <p>
            At Kookbook, we believe that cooking connects people — to cultures,
            memories, and each other. That’s why we’re building a community
            where food lovers can learn, grow, and get inspired together. Happy
            cooking.
          </p>
        </div>
        <Image
          src={"/c1.jpg"}
          alt="our catering"
          width={1000}
          height={700}
          className="rounded-lg shadow-lg"
        />
      </section>
      <section className="my-20 space-y-5">
        <h1 className="text-center text-4xl font-bold text-gray-900">What We Do</h1>
        <blockquote className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
          <div className="bg-[url(/c1.jpg)] bg-no-repeat bg-center bg-cover h-[10rem] p-5 relative group cursor-pointer">
            <div className="h-[10rem] bg-black/70 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-center text-sm text-white font-semibold">
                Choose us for our expertise, unique perspective, commitment to
                quality and continous improvement. We showcase a strong passion
                for food by staying current with culinary trends and techniques.
              </p>
            </div>
            {/* <Image src={"/c2.jpg"} alt="kookbook" width={500} height={500} /> */}
          </div>
          <div className="bg-[url(/c2.jpg)] bg-no-repeat bg-center bg-cover h-[10rem] p-5 relative group cursor-pointer">
            <div className="h-[10rem] bg-black/70 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-center text-sm text-white font-semibold">
            We analyze the meals of our esteemed clients, providing detailed information about their nutritional content. Our core value is to keep you healthy while providing the best of kitchen services
              </p>
            </div>
            {/* <Image src={"/c2.jpg"} alt="kookbook" width={500} height={500} /> */}
          </div>
          <div className="bg-[url(/c3.jpg)] bg-no-repeat bg-center bg-cover h-[10rem] p-5 relative group cursor-pointer">
            <div className="h-[10rem] bg-black/70 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-center text-sm text-white font-semibold">
              We inspire our clients to share their various traditional and native recipes and perspective on foods and cooking adding depth and richness to your kitchen desires.
              </p>
            </div>
            {/* <Image src={"/c2.jpg"} alt="kookbook" width={500} height={500} /> */}
          </div>
          <div className="bg-[url(/bg.jpg)] bg-no-repeat bg-center bg-cover h-[10rem] p-5 relative group cursor-pointer">
            <div className="h-[10rem] bg-black/70 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-center text-sm text-white font-semibold">
                Simplicity at it's best - Makes finding, saving, and sharing recipes effortless. It's for you.
              </p>
            </div>
            {/* <Image src={"/c2.jpg"} alt="kookbook" width={500} height={500} /> */}
          </div>
        </blockquote>
      </section>
    </main>
  );
};

export default page;