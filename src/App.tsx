import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './View/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;