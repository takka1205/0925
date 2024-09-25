"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PostAction = async (title: string) => {
  const res = await fetch(`http://localhost:3000/api/post/`, {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-type": "application/json",
    },
  });
  return res.json();
};
export default function Home() {
  const router = useRouter();
  const [Change, setChange] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Change !== "") {
      await PostAction(Change);
      router.push("/thanks");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">title</label>
          <input
            className="border"
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
        <button className="bg-black p-2 text-white">Submit</button>
      </form>
    </div>
  );
}
