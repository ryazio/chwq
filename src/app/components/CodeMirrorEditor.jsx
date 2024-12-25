import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { openAIService } from "@/Service/openai-service";
import LoadingStatus from "./Test/LoadingStatus";
import ConfirmedStatus from "./Test/ConfirmedStatus";
import ProgressBar from "./ProgressBar";

const CodeMirror = dynamic(() => import("react-codemirror"), { ssr: false });

const CodeMirrorEditor = ({
  question,
  updateLessons,
  selectedTab,
  categoryId,
  questionId,
  Lessons,
  setSelectedCategory,
  updateSelectedQuestion
}) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(`// Write your code here\n\n\n\n\n\n\n\n\n`);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    import("codemirror/lib/codemirror.css");
    import("codemirror/theme/dracula.css");
    import("codemirror/mode/javascript/javascript.js");
  }, []);

  const updateSelectedTab = (selectedTab, categoryId, questionId, answer) => {
    const updatedLessons = {
      ...Lessons,
      [selectedTab]: {
        ...Lessons[selectedTab],
        categories: Lessons[selectedTab].categories.map((category) => {
          if (category.catid === categoryId) {
            return {
              ...category,
              questions: category.questions.map((question) => {
                if (question.id === questionId) {
                  return { ...question, status: answer }; // Mark question as answered or unanswered
                }
                return question;
              }),
            };
          }
          return category;
        }),
      },
    };

    updateLessons(updatedLessons);
    console.log(updatedLessons);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await openAIService.sendPrompt(code, question);
      if (response) {
        const isCorrect = response.toLowerCase() === "true"; // Convert string to boolean
        alert(response);
        setIsAnswerCorrect(isCorrect);
        setShowConfirmed(true);
        updateSelectedTab(selectedTab, categoryId, questionId, isCorrect);
      }
    } catch (error) {
      alert(error);
    } finally {
      setShowResult(true);
      setIsLoading(false);
    }
  };

  const handleNextQuestion = () => {
    // Find current category
    const currentCategory = Lessons[selectedTab].categories.find(
      cat => cat.catid === categoryId
    );

    if (currentCategory) {
      // Find current question index in the category's questions array
      const currentQuestionIndex = currentCategory.questions.findIndex(q => q.id === questionId);
      
      // Look for the next unanswered question after the current one
      const nextUnansweredQuestion = currentCategory.questions
        .slice(currentQuestionIndex + 1)
        .find(q => !q.status);

      if (nextUnansweredQuestion) {
        // There is another unanswered question in this category
        console.log("Moving to next question in same category");
        setShowResult(false);
        setShowConfirmed(false);
        setIsAnswerCorrect(null);
        setCode(`// Write your code here\n\n\n\n\n\n\n\n\n`);
        updateSelectedQuestion(nextUnansweredQuestion);  // Update the selected question
      } else {
        // Check if all questions in the category are answered
        const allQuestionsAnswered = currentCategory.questions.every(q => q.status);
        
        if (allQuestionsAnswered && typeof setSelectedCategory === 'function') {
          // Only return to category selection if all questions are answered
          console.log("All questions complete, returning to category selection");
          setSelectedCategory(null);
          setShowResult(false);
          setShowConfirmed(false);
          setIsAnswerCorrect(null);
          setCode(`// Write your code here\n\n\n\n\n\n\n\n\n`);
        }
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full flex justify-end">
          <LoadingStatus />
        </div>
      ) : showConfirmed ? (
        <div className="w-full flex justify-end">
          <ConfirmedStatus />
        </div>
      ) : (
        <div className="relative">
          <CodeMirror
            ref={editorRef}
            value={code}
            options={{
              mode: "javascript",
              theme: "dracula",
              lineNumbers: true,
            }}
            onChange={(value) => {
              const updatedCode = String(value || ""); // Ensure value is always a string
              setCode(updatedCode);
              console.log("Updated code:", updatedCode);
            }}
          />
          <style jsx global>{`
            /* Styling for the CodeMirror container */
            .CodeMirror {
              border-radius: 15px !important; /* Rounded corners for the entire editor */
            }

            /* Styling for line numbers */
            .CodeMirror-linenumber {
              border-radius: 15px !important; /* Rounded line numbers */
              color: #ffffff4d !important; /* Color of line numbers */
              text-align: center !important;
            }
            .CodeMirror-gutter {
              background-color: #333236;
              text-align: center !important;
            }
            .CodeMirror-vscrollbar {
              overflow-y: hidden;
            }
          `}</style>
          <button
            className="absolute bottom-3 right-4 z-[9999999] flex items-center justify-center px-4 py-2 bg-[#FFCF4B] text-[#333333] text-[#333333] text-[13px] font-semibold rounded-lg"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {/* {isLoading ? (
          <div className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></div>
        ) : (
          "Submit"
        )} */}
            Submit
          </button>
          <style jsx>{`
            .loader {
              display: inline-block;
            }
          `}</style>
        </div>
      )}
      {showResult &&
        (isAnswerCorrect ? (
          <div className="mt-2 px-4 py-2 bg-[#333236] rounded-[15px] text-[16px] font-normal w-full sm:w-8/12">
            Congratulations 🎉, your code worked successfully!{" "}
          </div>
        ) : (
          <div className="mt-2 px-4 py-2 bg-[#333236] rounded-[15px] text-[16px] font-normal w-full sm:w-8/12">
            Oops! 😅 There's a mistake in the code. Try again—you've got this!
            💪{" "}
          </div>
        ))}
      {showResult && isAnswerCorrect ? (
        <>
          <div className="w-[100%] border-b-[1px] border-opacity-10 border-white mb-[1.5rem] mt-[5rem]"></div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="flex flex-col flex-1 px-2">
              <span className="text-[13px] italic font-normal text-white mb-2">
                Completed 1 out of 11 exercises. 10 more to go!
              </span>
              <ProgressBar progressPercentage={20} />
            </div>

            <button
              className="z-[9999999] flex items-center justify-center px-4 py-2 bg-[#FFCF4B] text-[#333333] text-[13px] font-semibold rounded-lg mt-1"
              type="button"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CodeMirrorEditor;
