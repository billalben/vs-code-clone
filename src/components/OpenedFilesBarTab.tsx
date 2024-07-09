import { IFile } from "../interfaces";
import { setClickedFile } from "../store/features/fileTreeSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const { activeTabId } = useAppSelector((state) => state.fileTree.clickedFile);

  // Handler
  const onFileTabClicked = () => {
    dispatch(
      setClickedFile({
        fileName: file.name,
        fileContent: file.content,
        activeTabId: file.id,
      })
    );
  };

  return (
    <div
      className={`flex flex-row items-center gap-1 bg-slate-300 py-2 px-4 cursor-pointer border-t-2 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onFileTabClicked}
    >
      <RenderFileIcon fileName={file.name} />
      <li>{file.name}</li>
      <div className="hover:bg-slate-400 p-1 rounded-full transition-colors duration-200">
        <CloseIcon />
      </div>
    </div>
  );
};

export default OpenedFilesBarTab;
