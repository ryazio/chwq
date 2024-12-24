import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import CodeMirror with SSR disabled
const CodeMirror = dynamic(() => import('react-codemirror'), { ssr: false });

const CodeMirrorEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    import('codemirror/lib/codemirror.css');   // Importing core CSS
    import('codemirror/theme/dracula.css');    // Importing theme
    import('codemirror/mode/javascript/javascript.js'); // Importing JavaScript mode
  }, []);

  // Initial value with 8 lines, the first line having a comment
  const initialCode = `// Write your code here
  \n\n\n\n\n\n\n\n\n
  `;

  return (
    <div>
      <CodeMirror
        ref={editorRef}
        value={initialCode}
        options={{
          mode: 'javascript',
          theme: 'dracula',
          lineNumbers: true,
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
    </div>
  );
};

export default CodeMirrorEditor;
