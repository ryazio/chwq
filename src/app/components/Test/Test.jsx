import LessonHeader from "./LessonHeader";
import CardComponet from "./CardComponet";
import Button from "./Button";
import Image from "next/image";  // Make sure to import Image from next/image

const Test = () => {
  return (
    <div className="w-full">
      <LessonHeader title="Lesson 2 / Loopity Loops" />
      <div className="flex flex-col mt-28 md:mt-0 text-white rounded-lg w-[100%]">
        <CardComponet
          imageSrc="/strikerIcon.png"
          imageAlt="Striker"
          title="Strike of Counters! - Counting the Penguin Soldiers!!"
          description="The Penguin Army is getting ready for a big march! Captain Flippers needs to count all the brave penguin soldiers before they head out. But with so many penguins waddling around, it's hard to keep track. Can you help Captain Flippers count the soldiers so they can start their journey? Write a Python program that counts the number of penguins from 1 to 10. Then, after the mission, count them again from 10 back down to 1 to make sure no one is left behind."
        >
          <Image
            src="/penguin_soldier.png"
            alt="Penguin Soldier"
            width={500}  
            height={100}
            layout="intrinsic"  
          />
        </CardComponet>
      </div>
    </div>
  );
};

export default Test;
