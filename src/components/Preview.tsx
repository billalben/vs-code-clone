import { useAppSelector } from "../store/hooks";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";

const Preview = () => {
  const { clickedFile } = useAppSelector((state) => state.fileTree);
  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter
        content={clickedFile.fileContent || ""}
        language="html"
      />
    </>
  );
};

export default Preview;
