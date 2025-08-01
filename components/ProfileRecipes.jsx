"use client";
import { db } from "@/lib/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb";

const ProfileRecipes = ({ session }) => {
  const [userRecipesArray, setUserRecipesArray] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchUserRecipes = async () => {
    try {
      const recipesRef = collection(db, "recipes");
      const q = query(recipesRef, where("authorId", "==", session.user.id));

      const querySnapshot = await getDocs(q);
      const recipesArray = [];
      for (const doc of querySnapshot.docs) {
        const userRecipe = {
          id: doc.id,
          ...doc.data(),
        };
        recipesArray.push(userRecipe);
        // console.log(recipesArray);
      }
      setUserRecipesArray(recipesArray);
      // console.log(userRecipesArray);
      setFetching(false);
    } catch (error) {
      console.error(error);
      alert("Failed to load recipes");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchUserRecipes();
  }, [userRecipesArray]);

  if (fetching) {
    return (
      <div className="flex items-center justify-center p-5">
        <TbLoader3 className="animate-spin text-3xl text-blue-500" />
      </div>
    );
  }

  if (userRecipesArray.length == 0) {
    return (
      <div>
        <h1>No recipes yet.</h1>
        <p>When you share recipes, they would appear here</p>
      </div>
    );
  }
  return (
    <main>
      <div className="border-b border-gray-200 mb-10 pt-10 z-20">
        <h1 className="text-center font-bold text-gray-800">Recipes</h1>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
        {userRecipesArray.map((recipe, i) => (
          <div key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={recipe.image}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <h2>{recipe.author}</h2>
              </div>
            </div>
            <p className="text-lg">{recipe.title}</p>
            <p className="line-clamp-2">{recipe.desc}</p>
            <div className="flex items-center justify-between">
              <p>{recipe.timestamp}</p>
              <Link
                href={"/recipes/" + recipe.id}
                className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
              >
                Read More
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProfileRecipes;