import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setOpenedFiles } from "../../store/features/fileTreeSlice";

interface IProps {
  positions: { x: number; y: number };
  setShowMenu: (value: boolean) => void;
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        console.log("Clicked Outside");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  const OnCloseAll = () => {
    dispatch(setOpenedFiles([]));
  };

  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit p-2 rounded-md"
        style={{ position: "absolute", top: positions.y, left: positions.x }}
      >
        <li
          className="py-1 px-2 cursor-pointer hover:bg-slate-300 rounded-md"
          onClick={OnCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
