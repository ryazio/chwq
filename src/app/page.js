"use client";

import { useState } from "react";
import Question from "./components/Question";
import Image from "next/image";
import Test from "./components/Test/Test";

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

        <div className="bg-[#1E1E1E] text-white pt-[15px] pb-[15px] mr-[20px] rounded-[15px] w-full min-w-[250px] md:w-[20%] hidden md:block min-w-fit">
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
          <Test />
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
