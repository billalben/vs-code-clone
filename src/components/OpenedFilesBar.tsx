import { useAppSelector } from "../store/hooks";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles } = useAppSelector(
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
    </div>
  );
};

export default OpenedFilesBar;
