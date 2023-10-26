import Image from "next/image";
import React from "react";
import dummy from "@/public/dummy.jpg";
import author from "@/public/author.jpg";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const PostCard = () => {
  return (
    <div className="shadow rounded col-span-1">
      <Image src={dummy} alt="me" className="max-h-52" />
      <div className="p-4">
        <h3 className="font-bold text-xl">
          Choosing the best JavaScript sorting algorithm for your project
        </h3>
        <p className="my-4 text-gray-500">
          Lets discuss how to use sorting techniques effectively in JavaScript
          projects, like insertion sort, quicksort, and more.
        </p>
        <div className="flex items-center justify-between mt-8 mb-4">
          <div className="flex space-x-2 items-center">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={author}
                alt="as"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm">Akash Sarki</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="">Oct 26, 2023</span>
                <LuDot />
                <span>11 min read</span>
              </div>
            </div>
          </div>
          <BsBookmark size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
