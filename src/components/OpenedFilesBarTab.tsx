import { IFile } from "../interfaces";
import {
  setClickedFile,
  setOpenedFiles,
} from "../store/features/fileTreeSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useAppSelector((state) => state.fileTree);

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

  const onRemove = (id: string) => {
    const filteredFiles = openedFiles.filter((file) => file.id !== id);
    const lastTab = filteredFiles[filteredFiles.length - 1];
    dispatch(setOpenedFiles(filteredFiles));

    if (filteredFiles.length === 0) {
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileName: "",
          fileContent: "",
        })
      );
      return;
    }

    dispatch(
      setClickedFile({
        activeTabId: lastTab.id,
        fileName: lastTab.name,
        fileContent: lastTab.content,
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
      <div
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
        className="hover:bg-slate-400 p-1 rounded-full transition-colors duration-200"
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default OpenedFilesBarTab;
