import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { openAIService } from '@/Service/openai-service';

const CodeMirror = dynamic(() => import('react-codemirror'), { ssr: false });

const CodeMirrorEditor = ({ question, updateLessons, selectedTab, categoryId, questionId, Lessons }) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(`// Write your code here\n\n\n\n\n\n\n\n\n`);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    import('codemirror/lib/codemirror.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/mode/javascript/javascript.js');
  }, []);

  const updateSelectedTab = (selectedTab, categoryId, questionId, answer ) => {
    // Update selectedTab to 1
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
    console.log(updatedLessons)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await openAIService.sendPrompt(code, question);
      if (response) {
        const isCorrect = response.toLowerCase() === 'true';  // Convert string to boolean
        alert(response);
        updateSelectedTab(selectedTab, categoryId, questionId, isCorrect);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  return (
    <div className="relative">
      <CodeMirror
        ref={editorRef}
        value={code}
        options={{
          mode: 'javascript',
          theme: 'dracula',
          lineNumbers: true,
        }}
        onChange={(value) => {
          const updatedCode = String(value || '');  // Ensure value is always a string
          setCode(updatedCode);
          console.log('Updated code:', updatedCode);
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
        className="absolute bottom-3 right-4 z-[9999999] flex items-center justify-center px-4 py-2 bg-[#FFCF4B] text-[#333333] rounded-lg"
        type="submit"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
      <style jsx>{`
        .loader {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default CodeMirrorEditor;
