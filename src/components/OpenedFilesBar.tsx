import { useAppSelector } from "../store/hooks";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useAppSelector(
    (state) => state.fileTree
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="overflow-x-auto">
        <ul className="flex items-center w-max">
          {openedFiles.map((file) => (
            <OpenedFilesBarTab key={file.id} file={file} />
          ))}
        </ul>
      </div>
      <FileSyntaxHighlighter
        content={clickedFile.fileContent || ""}
        language="html"
      />
    </div>
  );
};

export default OpenedFilesBar;
