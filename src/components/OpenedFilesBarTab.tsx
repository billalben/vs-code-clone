import { IFile } from "../interfaces";
import { setClickedFile } from "../store/features/fileTreeSlice";
import { useAppDispatch } from "../store/hooks";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useAppDispatch();

  // Handler
  const onFileTabClicked = () => {
    dispatch(
      setClickedFile({ fileName: file.name, fileContent: file.content })
    );
  };

  return (
    <div
      className="flex flex-row items-center gap-1 bg-slate-300 py-2 px-4 cursor-pointer [&:not(:last-child)]:border-r-2 border-slate-400 transition-colors duration-200"
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
