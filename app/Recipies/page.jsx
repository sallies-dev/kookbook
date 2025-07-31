import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import Link from "next/link";

const page = () => {
  const Recipies = [
    {
      image: "/bg.jpg",
      author: "jason statam",
      title: "Nigerian party jollof",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. corporis, fugiat eaque quaerat nobis dolores modi earum veniam  voluptatem dolorem",
      timestamp: "7/9/2025",
    },
    {
      image: "/bg.jpg",
      author: "jason statam",
      title: "Nigerian party jollof",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. corporis, fugiat eaque quaerat nobis dolores modi earum veniam  voluptatem dolorem",
      timestamp: "7/9/2025",
    },
    {
      image: "/bg.jpg",
      author: "jason statam",
      title: "Nigerian party jollof",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. corporis, fugiat eaque quaerat nobis dolores modi earum veniam  voluptatem dolorem",
      timestamp: "7/9/2025",
    },
  ];
  return (
    <main className="min-h-dvh">
      <section className="min-h-[30vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-black/50 flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
              Explore Recipies From Diverse Cultures
            </h1>
            <p className="text-white text-center text-lg">
              Discover a veriety of recipies that celebrate the rich Culinary
              tradtions from around the world
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3 md:gap-5 md:p-5 p-3">
        <div className=" space-y-3 shadow-md p-3">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                src={"/bg.jpg"}
                alt="user"
                width={500}
                height={500}
                className="w-8 h-8 rounded-full"
              />
              <h2>Johantan Stateham</h2>
            </div>
            <IoIosMore className="text-xl" />
            <p className="text-lg"></p>
            <p className="line-clamp-2"></p>
            <div className="flex items-center justfy-between">
              <p></p>
              <Link href={"#"} className="flex items-center text-sm">
                Read More
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
