import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

type TClickedFile = {
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
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
