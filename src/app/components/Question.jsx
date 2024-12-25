import React from 'react';
import Progress from './Progress';

const Question = ({ title, imageUrl, Lessons, categoryId, selectedTab }) => {
  return (
    <span className="relative">
        <img className="w-sm" src={imageUrl} alt="Card Image" />
        <div className="absolute flex flex-row justify-center bottom-[40%] rotate-[-15deg] items-center h-[30px] w-[11rem] rounded-[5px] ml-auto mr-auto bg-[#FFCF4B] text-black text-sm font-bold">
          {title}!
        </div>
        <Progress 
          totalQuestions={
            Lessons[selectedTab].categories.find(
              (cat) => cat.catid === categoryId
            )?.questions.length || 0
          }
          answeredQuestions={
            Lessons[selectedTab].categories
              .find((cat) => cat.catid === categoryId)
              ?.questions.filter((q) => q.status).length || 0
          }
        />
    </span>
  );
};

export default Question;
