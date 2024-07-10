import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import ContextMenu from "./ui/ContextMenu";

const OpenedFilesBar = () => {
  const { openedFiles } = useAppSelector((state) => state.fileTree);

  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="w-full overflow-x-auto"
      onContextMenu={(e) => {
        e.preventDefault();

        setMenuPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
      }}
    >
      <div className="overflow-x-auto">
        <ul className="flex items-center w-max">
          {openedFiles.map((file) => (
            <OpenedFilesBarTab key={file.id} file={file} />
          ))}
        </ul>
      </div>

      {showMenu && (
        <ContextMenu positions={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFilesBar;
