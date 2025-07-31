"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";

const EditProfile = ({ currentName, userId }) => {
  const [name, setName] = useState(currentName);

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "users", userId);
      await updateDoc(docRef, { name });
      console.log(name);
      alert("Profile Updated!");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <main>
      <div className="w-2xl mx-auto flex flex-col gap-2 mt-3">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="border border-gray-200 rounded-lg p-2 outline-none"
          placeholder="Update your name..."
        />
        <button
          onClick={() => handleUpdate()}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white rounded-lg p-2"
        >
          Update Name
        </button>
      </div>
    </main>
  );
};

export default EditProfile;
