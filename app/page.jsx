// Importing necessary modules and components from React and Next.js
"use client";
import { useState } from "react";
import { SearchIcon, MicIcon, LensIcon } from "../Utils/Svgs";
import { Router, useRouter } from "next/navigation";

// Main component for the Home page
export default function Home() {
  // Access the router object for navigation in Next.js
  const router = useRouter();

  // State to manage the search query input
  const [searchQuery, setSearchQuery] = useState("");

  // Custom API endpoint (replace with your actual API endpoint)
  const API_ENDPOINT = "YOUR_CUSTOM_API_ENDPOINT";

  // Function to handle the search action
  const handleSearch = async () => {
    // Check if the search query has a length greater than 0
    if (searchQuery.length > 0) {
      // Navigate to the SearchResult page with the search query as a parameter
      router.push(`/SearchResult/${searchQuery}`);
    }
  };

  // JSX structure for the Home page
  return (
    <div className="">
      {/* Header section with navigation links and sign-in button */}
      <div className="flex justify-end space-x-4 items-center pt-4 pr-2">
        <p>Gmail</p>
        <p>Image</p>
        <div className="w-8 h-8">
          {/* Google logo */}
          <svg
            className="gb_i"
            focusable="false"
            viewBox="0 0 24 24"
            fill="white"
          >
            {/* Google logo path */}
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </div>
        {/* Sign In button */}
        <button className="bg-[#4285f4] hover:border hover:border-solid text-white px-4 py-2 rounded-md">
          Sign In
        </button>
      </div>

      {/* Main header section with Google logo, search input, and icons */}
      <header className="pt-[8rem] p-4 shadow-md h-screen sm:pt-[10%] mr-4 overflow-x-hidden">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center ">
          {/* Google logo image */}
          <img
            className="h-[5rem] cursor-pointer"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt="Google Logo"
          />

          {/* Search input section */}
          <div className="sm:w-full flex items-center mt-4">
            {/* Search icon */}
            <div
              className=" h-8 w-8 relative left-[16%] sm:left-[8%] top-[2px] cursor-pointer"
              onClick={handleSearch}
            >
              <SearchIcon />
            </div>

            {/* Search input */}
            <input
              type="text"
              className="ml-[2rem]  flex-grow sm:ml-4 px-8 pr-16 sm:px-12  sm:pr-[6rem] w-[82vw] sm:w-full py-2 border border-gray-300 bg-transparent rounded-3xl focus:outline-none"
              placeholder=""
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Lens icon */}
            <div className="h-8 w-8 relative right-[17%] sm:right-[12%]">
              <LensIcon />
            </div>

            {/* Mic icon */}
            <div className="h-8 w-8 relative right-[17%] sm:right-[11%]">
              <MicIcon />
            </div>
          </div>

          {/* Buttons for Google Search and I'm Feeling Lucky */}
          <div className="sm:flex  hidden space-x-8 mt-4">
            <button
              className="bg-[#303134] hover:border hover:border-solid text-white px-4 py-2 rounded-md"
              onClick={handleSearch}
            >
              Google Search
            </button>
            <button className="bg-[#303134] hover:border hover:border-solid text-white px-4 py-2 rounded-md">
              I'm Feeling Lucky
            </button>
          </div>

          {/* Language options */}
          <div className="hidden sm:block mt-4  text-sm">
            Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ
            മലയാളം ਪੰਜਾਬੀ
          </div>

          {/* Mobile language options */}
          <div className=" sm:hidden mt-4 text-center  text-sm">
            Google offered in
          </div>

          {/* Mobile language options links */}
          <div
            className="sm:hidden flex flex-wrap justify-center space-x-4 mt-4"
            style={{ color: "#8ab4f8" }}
          >
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCBs">
              हिन्दी
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCBw">
              বাংলা
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCBw">
              বাংলা
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCB0">
              తెలుగు
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCB4">
              मराठी
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCB8">
              தமிழ்
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCCA">
              ગુજરાતી
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCCE">
              ಕನ್ನಡ
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCCI">
              മലയാളം
            </a>
            <a href="https://www.google.com/setprefs?sig=0_74RU4qW7wdFVPv1-5vkscFBdTxk%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjEi7v9nOSBAxVGmlYBHW-OAk8Q2ZgBCCM">
              ਪੰਜਾਬੀ
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
