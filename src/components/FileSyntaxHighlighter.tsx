import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string;
  language: string;
}

const FileSyntaxHighlighter = ({ content, language }: IProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
      }}
      showLineNumbers
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
