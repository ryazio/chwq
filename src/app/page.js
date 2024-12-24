"use client";

import { useState } from "react";
import Question from "./components/Question";
import Test from "./components/Test/Test";
import LessonsData from "../lib/data/Data";
import Danger from "./components/Svg/Danger";
import GreenTick from "./components/Svg/GreenTick";
import Lock from "./components/Svg/Lock";

export default function VerticalTabs() {
  const [Lessons, setLessons] = useState(LessonsData);
  const [selectedTab, setSelectedTab] = useState(1); // Default selected lesson
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

  // Dynamically generate lessons with passed status
  const lessons = Object.keys(Lessons).map((key) => {
    const lessonData = Lessons[key];

    // Check if the lesson is passed (all questions should have status = true)
    const isPassed = lessonData.categories.every((category) =>
      category.questions.every((question) => question.status)
    );

    return {
      title: `Lesson ${key}`,
      passed: isPassed,
      index: parseInt(key),  // Use numeric index for selectedTab comparison
    };
  });

  // Check if the current tab can be enabled
  const canEnableTab = (lessonIndex) => {
    // If the first lesson, it's always enabled
    if (lessonIndex === 1) return true;

    // Check if the previous lesson is passed (only if lessonIndex > 1)
    const previousLesson = lessons[lessonIndex - 2];
    if (!previousLesson) return false; // If the previous lesson does not exist, return false
    return previousLesson.passed; // Check if the previous lesson is passed
  };

  const handleTabChange = (lessonIndex) => {
    if (canEnableTab(lessonIndex)) {
      setSelectedTab(lessonIndex);
      setSelectedCategory(null); // Reset selected category when switching lesson
    }
  };

  return (
    <div className="h-max bg-black flex pt-10 gap-y-2.5 items-center justify-center mx-auto px-4">
      <div className="flex flex-row lg:w-[65%]">
        {/* Sidebar with Vertical Tabs (only visible on larger screens) */}
        <div className="flex flex-row items-start">
          <div className="bg-[#1E1E1E] text-white pt-[15px] pb-[15px] mr-[20px] rounded-[15px] w-full min-w-[15rem] md:w-[20%] hidden md:block">
            {lessons.map((lesson, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(lesson.index)}  // Handle tab change
                className={`w-full py-4 px-6 text-left transition flex flex-row justify-between tab-button ${
                  selectedTab === lesson.index
                    ? "bg-white text-black font-bold"
                    : "bg-[#1E1E1E] hover:bg-gray-700"
                } ${!canEnableTab(lesson.index) ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={!canEnableTab(lesson.index)} // Disable button if previous lesson is not passed
              >
                <div className="flex flex-row space-between">
                  {/* Show Danger if it's the current selected tab */}
                  {selectedTab === lesson.index && (lesson.passed ? "" : <Danger />)}
                  {/* Show GreenTick if passed, else Lock */}
                  {lesson.passed ? <GreenTick /> : <Lock />}
                  {lesson.title}
                </div>
                {/* Pill with spacing between lesson text */}
                {index === 0 && (
                  <span className="inline-block px-4 py-1 bg-[#EEFBE4] text-[#57C161] rounded-full text-xs ml-4 min-w-[67]">
                    100 %
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex-col mt-28 md:mt-0 md:flex-row flex text-white rounded-lg max-w-screen-xl">
          {!selectedCategory ? (
            <div className="p-8 bg-[#1E1E1E] rounded-[15px] flex-1 w-full md:w-[60%] sm:w-[95%]">
              <h1 className="text-2xl text-center font-bold mb-3">{`Categories for ${lessons.find(lesson => lesson.index === selectedTab)?.title}`}</h1>
              <div className="w-[100%] border-b-[1px] border-opacity-10 border-white mb-3"></div>

              <div className="flex flex-row mb-6 justify-around flex-wrap items-center">
                {Lessons[selectedTab]?.categories.map((category, index) => (
                  <span
                    className="justify-self-center"
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Question title={category.title} imageUrl={category.imageUrl} />
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <Test
              profileImage="/strikerIcon.png"
              selectedTab={selectedTab}
              Lessons={Lessons}
              selectedCategory={selectedCategory}
              image="/penguin_soldier.png"
              updateLessons={setLessons}
            />
          )}
        </div>

        {/* Dropdown Tab Navigation on mobile only */}
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
            value={selectedTab}  // Use selectedTab as is, it should always be a number
            onChange={(e) => {
              const lessonIndex = Number(e.target.value);
              if (canEnableTab(lessonIndex)) {
                setSelectedTab(lessonIndex);
                setSelectedCategory(null);
              }
            }}
          >
            {lessons.map((lesson, index) => (
              <option key={index} value={lesson.index} disabled={!canEnableTab(lesson.index)}>
                {lesson.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
