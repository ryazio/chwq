import React from 'react'

const ProgressBar = ({progressPercentage}) => {
  return (
    <div className="w-full flex items-center justify-start">
  <div className="w-4/5 h-[12px] rounded-full bg-[#333333] flex-1">
    <div
      className="h-[12px] rounded-full bg-[#57C161] transition-all ease-out duration-500"
      style={{ width: `${progressPercentage}%` }}
    ></div>
  </div>
 </div>

  )
}

export default ProgressBar