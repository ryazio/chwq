import LessonHeader from "./LessonHeader";
import CardComponet from "./CardComponent";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = ({ 
  profileImage, 
  image, 
  selectedTab, 
  Lessons, 
  updateLessons, 
  selectedCategory, 
  setSelectedCategory,
  lessonName
}) => {
  const [queSelected, setQueSelected] = useState(null);

  useEffect(() => {
    // Get the latest category data from Lessons
    const currentCategory = Lessons[selectedTab].categories.find(
      cat => cat.catid === selectedCategory.catid
    );
    
    if (currentCategory && !queSelected) {  // Only set if no question is selected
      // Find the first question with status: false in the updated category data
      const unansweredQuestion = currentCategory.questions.find(
        (question) => !question.status
      );
      
      if (unansweredQuestion) {
        console.log("Found first unanswered question:", unansweredQuestion);
        setQueSelected(unansweredQuestion);
      } else {
        console.log("No unanswered questions found");
        setQueSelected(false);
      }
    }
  }, [selectedCategory]); // Only depend on selectedCategory changes

  // Add function to update selected question
  const updateSelectedQuestion = (newQuestion) => {
    setQueSelected(newQuestion);
  };

  return (
    <div className="w-full">
      <LessonHeader title={lessonName} />
      <div className="flex flex-col mt-28 md:mt-0 text-white rounded-lg w-[100%]">
        {queSelected ? (
          <CardComponet
            imageSrc={profileImage}
            imageAlt="Profile Image"
            title={selectedCategory.title}
            categoryId={selectedCategory.catid}
            description={queSelected.question}
            queId={queSelected.id}
            selectedTab={selectedTab}
            updateLessons={updateLessons}
            Lessons={Lessons}
            setSelectedCategory={setSelectedCategory}
            updateSelectedQuestion={updateSelectedQuestion}  // Pass the function
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
          <div className="text-white text-[16px] font-[390] italic">All questions have been answered—there’s nothing left to address!</div>
        )}
      </div>
    </div>
  );
};

export default Test;
