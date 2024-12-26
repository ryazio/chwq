import LoadingIcon from "@/lib/icon/LoadingIcon";
import ProfileIcon from "@/lib/icon/ProfileIcon.png";
import React from "react";
import Image from "next/image";
import UploadIcon from "@/lib/icon/UploadIcon";

const ConfirmedStatus = ({ status }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 bg-[#0000004D] h-[200px] w-[200px] rounded-[15]">
        <UploadIcon />
        <span className="font-[390] text-[14px] ">Code Submitted!</span>
      </div>
      <div className="w-full flex justify-end">
        <Image src={ProfileIcon} alt="Profile Icon"/>
      </div>
    </div>
  );
};

export default ConfirmedStatus;
