import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeTab from "./components/WelcomeTab";
import { fileTree } from "./data/fileTree";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const {openedFiles} = useAppSelector((state) => state.fileTree);

  return (
    <div className="flex mt-4 overflow-hidden min-h-screen">
      <ResizablePanel
        leftPanel={<RecursiveComponent fileTree={fileTree} />}
        // rightPanel={<Preview />}
        rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTab />}
        showLeftPanel={true}
      />
    </div>
  );
};

export default App;
