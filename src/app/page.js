"use client";

import { useState } from "react";

export default function VerticalTabs() {
  const [selectedTab, setSelectedTab] = useState(1); // Default selected tab
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card
  const [code, setCode] = useState(""); // Track input code

  const lessons = Array.from({ length: 10 }, (_, i) => `Lesson ${i + 1}`);
  const questions = [
    { id: 1, question: "What is JavaScript?", codeSnippet: "" },
    { id: 2, question: "What is React?", codeSnippet: "" },
    { id: 3, question: "What is Tailwind CSS?", codeSnippet: "" },
  ];

  const handleCodeSubmit = () => {
    alert(`Submitted code for question: ${questions[selectedCard - 1].question}\nCode: ${code}`);
    setCode(""); // Clear the code input after submission
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      {/* Container */}
      <div className="flex bg-gray-800 text-white rounded-lg shadow-lg">
        {/* Sidebar with Vertical Tabs */}
        <div className="w-48 border-r border-gray-700">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index + 1)}
              className={`w-full py-4 px-6 text-left transition ${
                selectedTab === index + 1
                  ? "bg-gray-600 font-bold"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {lesson}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="p-8 flex-1">
          <h1 className="text-2xl font-bold mb-6">{`Content for Lesson ${selectedTab}`}</h1>

          {/* If no question is selected, show the list of questions */}
          {!selectedCard && (
            <div className="grid grid-cols-1 gap-6 mb-6">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition"
                  onClick={() => setSelectedCard(question.id)}
                >
                  <h2 className="font-bold text-lg">{`Question ${question.id}: ${question.question}`}</h2>
                </div>
              ))}
            </div>
          )}

          {/* If a question is selected, show the question details */}
          {selectedCard && (
            <div className="bg-gray-900 p-6 rounded-lg mt-6">
              <button
                onClick={() => setSelectedCard(null)}
                className="text-blue-500 hover:text-blue-300 mb-4 inline-block"
              >
                &lt; Back to Questions List
              </button>
              <h2 className="text-xl font-bold mb-4">{`Question: ${questions[selectedCard - 1].question}`}</h2>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="6"
                className="w-full p-4 bg-gray-800 text-white rounded-lg mb-4"
                placeholder="Write your code here..."
              ></textarea>

              <button
                onClick={handleCodeSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                Submit Code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
