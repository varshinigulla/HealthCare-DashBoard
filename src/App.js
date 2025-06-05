import './App.css';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/sideBar';
import { Dashboard } from './Components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
