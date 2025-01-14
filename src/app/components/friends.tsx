"use client";
import { urlFor } from "@/sanity/imageUrlBuilder";
import { Friends } from "@/sanity/types";
import { useState } from "react";

export default function FriendSection({ friends }: { friends: Friends[] }) {
  const [FriendId, setFriendId] = useState("");

  return (
    <div className="bg-zinc-100 pt-[9vw] md:pt-[7vw]" id="friends">
      <h1 className=" font-boldtext-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center p-[2vw]">
        FRIENDS
      </h1>
      <div className="flex sm:flex-row flex-wrap justify-between p-[2vw]">
        {friends.map((friend) => (
          <a
            key={friend._id}
            href={friend.link}
            className=" m-[1vw] p-[1vw] rounded-[1vw]  flex flex-col items-center"
            onMouseEnter={() => setFriendId(friend._id)}
            onMouseLeave={() => setFriendId("")}
          >
            <h2
              className={`text-lg md:text-xl lg:text-2xl ${FriendId == friend._id ? "block" : "hidden"}`}
            >
              {friend.title}
            </h2>
            {friend.icon && (
              <img
                src={urlFor(friend.icon).url()}
                alt={friend.title || "Friend"}
                className=" w-[15vw] h-[15vw] object-cover rounded-full"
              />
            )}
            <p
              className={`text-center ${FriendId == friend._id ? "block" : "hidden"}`}
            >
              {" "}
              {friend.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
