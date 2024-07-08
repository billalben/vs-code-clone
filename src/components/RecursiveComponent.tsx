import { useState } from "react";
import { IFile } from "../interfaces";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center gap-1 flex-col ml-2">
      {fileTree.isFolder ? (
        <div className="flex items-center cursor-pointer" onClick={toggleIsOpen}>
          <RightArrowIcon
            className={`transform ${isOpen ? "rotate-90" : ""}`}
          />
          <FolderIcon />
          <span className="ml-1 select-none">{fileTree.name}</span>
        </div>
      ) : (
        <div className="flex items-center cursor-pointer ml-5">
          <FileIcon />
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
