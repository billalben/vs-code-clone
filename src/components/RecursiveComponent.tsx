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
  }

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center">
        {fileTree.isFolder ? (
          <div className="flex items-center" onClick={toggleIsOpen}>
            <RightArrowIcon className={`transform ${isOpen ? "rotate-90" : ""}`} />
            <FolderIcon />
          </div>
        ) : (
          <FileIcon />
        )}

        <span className="ml-1 select-none" onClick={toggleIsOpen}>{fileTree.name}</span>
      </div>

      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
