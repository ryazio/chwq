import Image from "next/image";
import Button from "./Button";
import CodeMirrorEditor from "../CodeMirrorEditor";

const Card = ({ imageSrc, imageAlt, title, description,updateLessons,selectedTab,categoryId,queId,Lessons,setSelectedCategory,updateSelectedQuestion, children }) => {
  return (
    <div className="px-4 md:px-8 py-2 bg-[#1E1E1E] rounded-[15px]">
      <div className="flex flex-row">
        <div className="sm:flex-none">
          <Image src={imageSrc} alt={imageAlt} width={80} height={80} /> {/* Use number for width and height */}
        </div>
        <div className="flex flex-col gap-y-2.5">
          <span className="text-[14px] font-semibold text-[#ffffff]">{title}</span>
          <div className="flex flex-col gap-4 px-8 py-4 bg-[#FFFFFF1A] rounded-[15px]">
            <span className="text-[14px] font-[390] leading-6 text-[#ffffff]">
              {description}
            </span>
            {children}
          </div>
        <div className="flex gap-2">
          <Button iconAlt="Docs Icon" text="Docs" />
          <Button iconAlt="Hints Icon" text="Hints" isActive={false} />
          <Button iconAlt="Help Icon" text="Help" isActive={false} />
        </div>
        </div>
      </div>
      <div className="mt-[2rem] mb-[2rem]">
        <CodeMirrorEditor question={description} updateLessons={updateLessons} selectedTab={selectedTab} categoryId={categoryId} questionId={queId} Lessons={Lessons} setSelectedCategory={setSelectedCategory} updateSelectedQuestion={updateSelectedQuestion}/>
      </div>
    </div>
  );
};

export default Card;
