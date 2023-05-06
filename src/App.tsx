import { Outlet } from 'react-router-dom';
import NavBar, { Link } from './View/NavBar/NavBar';

const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/more", title: "More" }
]

function App() {
  return (
    <div>
      <NavBar links={links} />
      <Outlet />
    </div>
  );
}

export default App;
