import { useAppSelector } from "../store/hooks";
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
      {clickedFile.fileName && (
        <div className="bg-slate-300 p-2 mt-2 overflow-x-auto">
          <p className="mt-2">{clickedFile.fileContent}</p>
        </div>
      )}
    </div>
  );
};

export default OpenedFilesBar;
