import "./App.css";
import { useRoutes, Link } from "react-router-dom";
import { IoIosFitness } from "react-icons/io";
import Feed from "./pages/Feed";
import New from "./pages/New";

function App() {
  let main = useRoutes([
    { path: "/", element: <Feed /> },
    { path: "/new", element: <New />},
  ]);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <IoIosFitness className="icon" />
          <h4>Record Hub</h4>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/new">Create Post</Link>
        </nav>
      </div>
      <div className="main">{main}</div>
    </>
  );
}

export default App;
