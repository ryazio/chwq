import React from 'react'

const ProgressBar = ({ totalQuestions, answeredQuestions }) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  const remainingQuestions = totalQuestions - answeredQuestions;

  return (
    <div className="w-full space-y-2">
      <div className="text-[13px] italic font-normal text-white mb-2">
        Completed {answeredQuestions} out of {totalQuestions} exercises. {remainingQuestions} more to go!
      </div>
      <div className="w-full flex items-center justify-start">
        <div className="w-4/5 h-[12px] rounded-full bg-[#333333] flex-1">
          <div
            className="h-[12px] rounded-full bg-[#57C161] transition-all ease-out duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar