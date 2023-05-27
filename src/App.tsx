import { Sidebar } from './components';
import Searchbar from './components/Search';

const App = () => (
  <div className="flex">
    <Sidebar />

    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-slate-800 sm:p-12 p-6">
      <Searchbar />
      Something
    </div>
  </div>
);

export default App;
