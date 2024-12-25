import React from 'react'

const Progress = ({ totalQuestions, answeredQuestions }) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="w-full h-2 bg-[#333333] rounded-b-lg">
        <div
          className="h-2 bg-[#57C161] rounded-b-lg transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default Progress