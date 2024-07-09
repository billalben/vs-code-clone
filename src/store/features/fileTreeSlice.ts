import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

type TClickedFile = {
  fileName: string;
  fileContent: string;
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
    }
  },
});

export const { setOpenedFiles } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
