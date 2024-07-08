import { extensionIcon } from "../constant";
import IconImg from "./IconImg";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({
  fileName,
  isFolder = false,
  isOpen = false,
}: IProps) => {
  const extension = fileName.split(".").pop();

  // Determine folder icon if isFolder is true
  if (isFolder) {
    const folderIcon = extensionIcon[fileName];
    const folderState = isOpen ? "-open.svg" : ".svg";

    return (
      <IconImg
        src={
          folderIcon
            ? `${folderIcon}${folderState}`
            : `/icons/folder-app${folderState}`
        }
      />
    );
  }

  // Determine file icon if isFolder is false
  const fileIcon = extension ? extensionIcon[extension] : null;

  return <IconImg src={fileIcon ? `${fileIcon}.svg` : `/icons/file.svg`} />;
};

export default RenderFileIcon;
