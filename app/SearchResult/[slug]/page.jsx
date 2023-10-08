"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const router = useRouter();
  const API_KEY = `${process.env.NEXT_PUBLIC_API_KEY}`;
  const SEARCH_ENGINE_ID = `${process.env.NEXT_PUBLIC_CX_KEY}`;
  const [data, setdata] = useState(null);

  const getSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${params.slug}`
    );
    const resp = await response.json();
    setdata(resp);
  };
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="text-[13px] sm:text-3xl m-4">
          Search Results For Your Search
        </div>
        <div className="">
          <button
            className="bg-blue-400 hover:border hover:border-solid text-white px-4 py-2 rounded-md"
            onClick={() => {
              router.push("/");
            }}
          >
            Google Search
          </button>
        </div>
      </div>
      <div className="px-[2rem] sm:px-[10rem] pt-4 flex flex-col space-y-10">
        {data?.items?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(item?.formattedUrl);
            }}
            className="w-full sm:w-[55%] cursor-pointer"
          >
            <div className="flex items-center space-x-4 ">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div className="flex flex-col">
                <div className="">{item?.title}</div>
                <div className="text-xs">
                  {item?.link?.slice(0, 14)} &gt; wiki &gt; hi
                </div>
              </div>
            </div>
            <div className="text-xl text-[#84b3f2] font-semibold">
              {item.title}
            </div>
            <div className="">{item?.snippet}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
