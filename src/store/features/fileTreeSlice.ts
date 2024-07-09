import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

type TClickedFile = {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
};

type TInitialState = {
  openedFiles: IFile[];
  clickedFile: TClickedFile;
};

const initialState: TInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<TClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
