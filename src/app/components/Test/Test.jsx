import LessonHeader from "./LessonHeader";
import CardComponet from "./CardComponet";
import Image from "next/image";  // Make sure to import Image from next/image

const Test = ({profileImage, title, image, description}) => {
  return (
    <div className="w-full">
      <LessonHeader title="Lesson 2 / Loopity Loops" />
      <div className="flex flex-col mt-28 md:mt-0 text-white rounded-lg w-[100%]">
        <CardComponet
          imageSrc={profileImage}
          imageAlt="Profile Image"
          title={title}
          description={description}
        >
          <Image
            src={image}
            alt="Question related image"
            width={500}  
            height={100}
            layout="intrinsic"  
          />
        </CardComponet>
      </div>
      <div>
    </div>
    </div>
  );
};

export default Test;
