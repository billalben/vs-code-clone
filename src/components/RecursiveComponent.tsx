import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setOpenedFiles } from "../store/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const dispatch = useAppDispatch();
  const { openedFiles } = useAppSelector((state) => state.fileTree);

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const onFileClicked = () => {
    const exist = doesFileObjectExist(openedFiles, fileTree.id);
    if (exist) return;

    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  };

  return (
    <div className="flex justify-center gap-1 flex-col ml-2">
      {fileTree.isFolder ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleIsOpen}
        >
          <RightArrowIcon
            className={`transform ${isOpen ? "rotate-90" : ""}`}
          />
          <RenderFileIcon
            fileName={fileTree.name}
            isFolder={fileTree.isFolder}
            isOpen={isOpen}
          />
          <span className="ml-1 select-none">{fileTree.name}</span>
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer ml-5"
          onClick={onFileClicked}
        >
          <RenderFileIcon fileName={fileTree.name} />
          <span className="ml-1 select-none">{fileTree.name}</span>
        </div>
      )}

      {isOpen &&
        fileTree.isFolder &&
        fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
