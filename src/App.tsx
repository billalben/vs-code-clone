import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex mt-4 overflow-hidden min-h-screen">
      <ResizablePanel
        leftPanel={<RecursiveComponent fileTree={fileTree} />}
        rightPanel={<OpenedFilesBar />}
        showLeftPanel={true}
      />
    </div>
  );
};

export default App;
