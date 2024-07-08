import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "vite.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "react.tsx",
          isFolder: false,
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "favicon.ico",
          isFolder: false,
        },
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        { name: "components", isFolder: true, children: [] },
        { name: "App.tsx", isFolder: false },
        { name: "index.tsx", isFolder: false },
        { name: "styles.css", isFolder: false },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
  ],
};
