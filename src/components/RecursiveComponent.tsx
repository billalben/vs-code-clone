import FileIcon from "./SVG/FileIcon";
// import FolderIcon from "./SVG/FolderIcon";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  return (
    <div className="ml-2">
      <div className="flex items-center">
        <RightArrowIcon />
        <span>
          {/* <FolderIcon /> */}
          <FileIcon />
        </span>
        <span className="ml-1">{fileTree.name}</span>
      </div>

      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
