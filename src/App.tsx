import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex mt-4 overflow-hidden">
      <RecursiveComponent fileTree={fileTree} />
      <OpenedFilesBar />
    </div>
  );
};

export default App;
