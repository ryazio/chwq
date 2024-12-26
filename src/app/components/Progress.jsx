import React from 'react'

const Progress = ({ totalQuestions, answeredQuestions }) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="w-full h-[12px] bg-[#333333] rounded-full">
        <div
          className="h-[12px] bg-[#57C161] rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default Progress