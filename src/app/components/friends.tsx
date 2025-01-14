import { urlFor } from "@/sanity/imageUrlBuilder";
import { Friends } from "@/sanity/types";

export default function FriendSection({ friends }: { friends: Friends[] }) {
  return (
    <div className="bg-zinc-100" id="friends">
      <h1 className="text-black font-bold text-xl md:text-2xl lg:text-5xl text-center p-[2vw]">
        FRIENDS
      </h1>
      <div className="flex sm:flex-row flex-wrap justify-between m-[2vw]">
        {friends.map((friend) => (
          <a
            key={friend._id}
            href={friend.link}
            className=" m-[1vw] p-[1vw] rounded-[1vw]  flex flex-col items-center"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl">{friend.title}</h2>
            {friend.icon && (
              <img
                src={urlFor(friend.icon).url()}
                alt={friend.title || "Friend"}
                className=" w-[15vw] h-[15vw] object-cover rounded-full"
              />
            )}
            <p className="text-center"> {friend.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
