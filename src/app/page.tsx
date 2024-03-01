import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-5 w-[300px] m-auto  h-[100vh]">
        <label className="">
          <Link
            href={"/Quotes"}
            className="name bg-white text-black p-2 rounded-md"
          >
            Quotes
          </Link>
        </label>
        <label className="">
          <Link
            href={"/Proverbs"}
            className="name bg-white text-black p-2 rounded-md"
          >
            Proverbs
          </Link>
        </label>

        <label className="">
          <Link
            href={"/Dialogues"}
            className="name bg-white text-black p-2 rounded-md"
          >
            Dialogues
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Home;
