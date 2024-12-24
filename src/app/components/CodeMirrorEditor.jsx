import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { openAIService } from '@/Service/openai-service';
const CodeMirror = dynamic(() => import('react-codemirror'), { ssr: false });

const CodeMirrorEditor = () => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(`// Write your code here\n\n\n\n\n\n\n\n\n`);
  useEffect(() => {
    import('codemirror/lib/codemirror.css');
    import('codemirror/theme/dracula.css');
    import('codemirror/mode/javascript/javascript.js');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await openAIService.sendPrompt(code, question);
      if (response){
        alert(response);
      }
    } catch (error) {
      alert(error);
    }  
  } 
  return (
    <div className='relative'>
      <CodeMirror
        ref={editorRef}
        value={code}
        options={{
          mode: 'javascript',
          theme: 'dracula',
          lineNumbers: true,
        }}
        onChange={(value) => {
          const updatedCode = value;
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
          color: white !important; /* Color of line numbers */
          text-align: center;
        }
        .CodeMirror-gutter {
          background-color: #333236;
          display: flex;
        }
      `}</style>
      <button className='absolute bottom-3 right-4 z-[9999999]' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CodeMirrorEditor;
