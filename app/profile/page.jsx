"use server";
import { auth } from "@/auth";
import EditProfile from "@/components/EditProfile";
import { redirect } from "next/navigation";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { query, where, orderBy, doc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import ProfileRecipes from "@/components/ProfileRecipes";

const page = async () => {
  const session = await auth();
  const name = session?.user?.name;
  const uid = session?.user?.id;

  if (!session) {
    redirect("/auth/signin");
  }

  const fetchRecipe = async () => {
    const docRef = collection(db, "recipes");
    const q = query(docRef, where("authorId", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });

    // try {
    // } catch (error) {
    //   console.error("Error fetching user's recipe:", error);
    //   // alert("Error fetching recipes");
    // }
  };
  fetchRecipe();

  let x = name.split(" ");
  let username = x[0];

  return (
    <main className="min-h-dvh z-20">
      <section className="">
        <div className="h-[30vh] bg-[url('/wavy.png')] bg-no-repeat bg-center bg-cover relative">
          <img
            src={session?.user?.image}
            alt={session?.user?.name.slice(0, 1).toUpperCase()}
            className="w-40 h-40 rounded-full md:absolute -bottom-[50%] left-[45%]"
          />
        </div>
        <div className="mt-30 space-y-10">
          <h1 className="text-center text-3xl text-gray-800 font-bold uppercase">
            {session?.user?.name}
          </h1>
          <div className="flex flex-col items-center justify-center gap-10">
            <p className="text-xl text-gray-700">@{username.toLowerCase()}</p>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              {" "}
              <MdOutlineMailOutline /> {session?.user?.email}
            </span>
          </div>
        </div>
      </section>

      <EditProfile currentName={name} userId={uid} />

      <ProfileRecipes session={session}/> 
    </main>
  );
};

export default page;
