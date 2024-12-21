import React from 'react';

const Question = ({ title, imageUrl }) => {
  return (
    <span className="relative">
        <img className="w-sm" src={imageUrl} alt="Card Image" />
        <div className="absolute flex flex-row justify-center bottom-[40%] rotate-[-15deg] items-center h-[30px] w-[11rem] rounded-[5px] ml-auto mr-auto bg-[#FFCF4B] text-black text-sm font-bold">
          {title}!
        </div>
    </span>
  );
};

export default Question;
