import { v4 as uuid } from "uuid";
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "vite.tsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: "react.tsx",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "favicon.ico",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import React from "button";`
            },
          ],
        },
        { id: uuid(), name: "App.tsx", isFolder: false, content: `import React from "app";` },
        { id: uuid(), name: "index.tsx", isFolder: false },
        { id: uuid(), name: "styles.css", isFolder: false },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
    },
  ],
};
