"use client";

import { useState } from "react";
import Question from "./components/Question";
import Image from "next/image";
import  StrikerIcon  from "../app/assets/icons/strikerIcon.png";
import PenguinSoldier from "../app/assets/images/penguin_soldier.png"
import DocsIcon from "../app/assets/icons/docsIcon.png"

export default function VerticalTabs() {
  const [selectedTab, setSelectedTab] = useState(1); // Default selected tab
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card
  const [code, setCode] = useState(""); // Track input code

  const lessons = Array.from({ length: 10 }, (_, i) => `Lesson ${i + 1}`);
  const questions = {
    1: [
      { id: 1, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      { id: 2, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      {
        id: 3,
        title: "Strike of Counters!",
        imageUrl: "/1.png",
        codeSnippet: "",
      },
      // { id: 4, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      // { id: 5, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      // {
      //   id: 6,
      //   title: "Strike of Counters!",
      //   imageUrl: "/1.png",
      //   codeSnippet: "",
      // },
      //   { id: 7, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      //   { id: 8, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      //   {
      //     id: 9,
      //     title: "Strike of Counters!",
      //     imageUrl: "/1.png",
      //     codeSnippet: "",
      //   },
      //   { id: 10, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      //   { id: 11, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      //   {
      //     id: 12,
      //     title: "Strike of Counters!",
      //     imageUrl: "/1.png",
      //     codeSnippet: "",
      //   },
      //     { id: 13, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      //     { id: 14, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      //     {
      //       id: 15,
      //       title: "Strike of Counters!",
      //       imageUrl: "/1.png",
      //       codeSnippet: "",
      //     },
      //     { id: 16, title: "List Mania!", imageUrl: "/3.png", codeSnippet: "" },
      //     { id: 17, title: "Loopity Loops!", imageUrl: "/2.png", codeSnippet: "" },
      //     {
      //       id: 18,
      //       title: "Strike of Counters!",
      //       imageUrl: "/1.png",
      //       codeSnippet: "",
      //     },
    ],
  };

  const handleCodeSubmit = () => {
    alert(
      `Submitted code for question: ${
        questions[selectedCard - 1].question
      }\nCode: ${code}`
    );
    setCode(""); // Clear the code input after submission
  };

  return (
    <div className="h-screen bg-black flex gap-y-2.5 items-center justify-center mx-auto px-4">
      <div className="flex flex-row lg:w-[65%]">
        {/* Sidebar with Vertical Tabs (only visible on larger screens) */}
        <div className="flex flex-row items-start">

        <div className="bg-[#1E1E1E] text-white pt-[15px] pb-[15px] mr-[20px] rounded-[15px] w-full md:w-[20%] hidden md:block min-w-fit">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index + 1)}
              className={`w-full py-4 px-6 text-left transition flex flex-row justify-between tab-button ${
                selectedTab === index + 1
                  ? "bg-white text-black font-bold"
                  : "bg-[#1E1E1E] hover:bg-gray-700"
              }`}
            >
              {lesson}
              {/* Pill with spacing between lesson text */}
              {index === 0 && (
                <span className="inline-block px-4 py-1 bg-[#EEFBE4] text-[#57C161] rounded-full text-xs ml-4">
                  100 %
                </span>
              )}
            </button>
          ))}
        </div>
        </div>
        {/* Container */}
        {!selectedCard && (
          <div className="flex-1 flex-col mt-28 md:mt-0 md:flex-row flex text-white rounded-lg max-w-screen-xl">
            {/* Main Content Area */}

            <div className="p-8 bg-[#1E1E1E] rounded-[15px] flex-1 w-full md:w-[60%] sm:w-[95%]">
              <h1 className="text-2xl text-center font-bold mb-3">{`Content for Lesson ${selectedTab}`}</h1>
              <div className="w-[100%] border-b-[1px] border-opacity-10 border-white mb-3"></div>
              {/* If no question is selected, show the list of questions */}

              <div className="flex flex-row mb-6 justify-around flex-wrap justify-around items-center">
                {questions[selectedTab]
                  ? questions[selectedTab].map((question) => (
                      <span
                        className="justify-self-center"
                        key={question.id}
                        onClick={() => setSelectedCard(question.id)}
                      >
                        <Question
                          title={question.title}
                          imageUrl={question.imageUrl}
                        />
                      </span>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        )}
        {selectedCard && (
          <div className="w-full"><div className="w-full text-[18px] font-[390] text-[#666666] mb-2">
            Lesson 2 / Loopity Loops
          </div>
          <div className="flex-1 flex-col mt-28 md:mt-0 md:flex-row flex text-white rounded-lg max-w-screen-2xl">
          <div className="px-4 md:px-8 py-2 bg-[#1E1E1E] rounded-[15px] flex-1 w-full md:w-[60%] sm:w-[95%]">
            <div className="flex flex-row">
              <div className="sm:flex-none">
                <Image src={StrikerIcon} alt="Striker"/>
              </div>
              <div className="flex flex-col gap-y-2.5">
                <span className="text-[14px] font-semibold text-[#ffffff]">Strike of Counters! - Counting the Penguin Soldiers!!</span>
                <div className="flex flex-col gap-4 px-8 py-4 bg-[#FFFFFF1A] rounded-[15px] max-w-[534]">
                  <span className="text-[14px] font-[390] leading-6 text-[#ffffff]">The Penguin Army is getting ready for a big march! Captain Flippers needs to count all the brave penguin soldiers before they head out. But with so many penguins waddling around, it's hard to keep track. Can you help Captain Flippers count the soldiers so they can start their journey?
                  Write a Python program that counts the number of penguins from 1 to 10. Then, after the mission, count them again from 10 back down to 1 to make sure no one is left behind.</span>
                  <Image src={PenguinSoldier} alt="Penguin Soldier" />
                </div>
                <div className="flex gap-2">
                <button className="py-2 px-4 bg-[#FFFFFF1A] rounded-[15px] gap-1 transition flex flex-row justify-between tab-button text-[14px] font-semibold">
                  <Image src={DocsIcon} alt="docs Icon"/>
                  <span>Docs</span>
                </button>
                <button className="py-2 px-4 bg-[#FFFFFF1A] rounded-[15px] gap-1 transition flex flex-row justify-between tab-button text-[14px] font-semibold text-[#FFFFFF80]">
                  <Image src={DocsIcon} alt="Hints Icon"/>
                  <span>Hints</span>
                </button>
                <button className="py-2 px-4 bg-[#FFFFFF1A] rounded-[15px] gap-1 transition flex flex-row justify-between tab-button text-[14px] font-semibold text-[#FFFFFF80]">
                  <Image src={DocsIcon} alt="Help Icon"/>
                  <span>Help</span>
                </button>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        )}

        {/* Dropdown Tab Navigation on mobile only - Moved to the top */}
        <div className="fixed top-0 left-0 right-0 bg-[#1E1E1E] py-4 px-6 md:hidden">
          <label
            htmlFor="lesson-dropdown"
            className="text-white text-sm mb-2 block"
          >
            Select a Lesson:
          </label>
          <select
            id="lesson-dropdown"
            className="w-full bg-[#2D2D2D] text-white border-2 border-gray-700 rounded-lg py-2 px-4"
            value={selectedTab}
            onChange={(e) => setSelectedTab(Number(e.target.value))}
          >
            {lessons.map((lesson, index) => (
              <option key={index} value={index + 1}>
                {lesson}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
