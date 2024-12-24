import LessonHeader from "./LessonHeader";
import CardComponet from "./CardComponent";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = ({ profileImage, image, selectedTab, Lessons, updateLessons, selectedCategory }) => {
  const [queSelected, setQueSelected] = useState(null);

  useEffect(() => {
    // Get the latest category data from Lessons
    const currentCategory = Lessons[selectedTab].categories.find(
      cat => cat.catid === selectedCategory.catid
    );
    
    if (currentCategory) {
      // Find the first question with status: false in the updated category data
      const unansweredQuestion = currentCategory.questions.find(
        (question) => !question.status
      );
      
      if (unansweredQuestion) {
        console.log("Found unanswered question:", unansweredQuestion);
        setQueSelected(unansweredQuestion);
      } else {
        console.log("No unanswered questions found");
        setQueSelected(false);
      }
    }
  }, [selectedCategory, Lessons, selectedTab]);

  return (
    <div className="w-full">
      <LessonHeader title="Lesson 2 / Loopity Loops" />
      <div className="flex flex-col mt-28 md:mt-0 text-white rounded-lg w-[100%]">
        {queSelected ? (
          <CardComponet
            imageSrc={profileImage}
            imageAlt="Profile Image"
            title={selectedCategory.title}
            categoryId={selectedCategory.catid}
            description={queSelected.question}
            queId={queSelected.id} // Safely access question when queSelected is valid
            selectedTab={selectedTab}
            updateLessons={updateLessons}
            Lessons={Lessons}
          >
            <Image
              src={image}
              alt="Question related image"
              width={500}
              height={100}
              layout="intrinsic"
            />
          </CardComponet>
        ) : (
          <div className="text-white">No questions left or all questions are answered!</div>
        )}
      </div>
    </div>
  );
};

export default Test;
