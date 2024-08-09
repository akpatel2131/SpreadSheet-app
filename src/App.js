import Grid from "./component/Grid";
import SearchBar from "./component/SearchBar";
import FormattingControls from "./component/FormattingControls";
import UndoRedoControls from "./component/UndoAndRedo";
import Pagination from "./component/Pagination";
import './App.css';

function App() {
  return (
    <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Spreadsheet App</h1>
    <SearchBar />
    <FormattingControls />
    <UndoRedoControls />
    <Grid />
    <Pagination />
  </div>

  );
}

export default App;
