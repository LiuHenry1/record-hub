import "./App.css";
import { useRoutes, Link } from "react-router-dom";
import { IoIosFitness } from "react-icons/io";
import Feed from "./pages/Feed";
import New from "./pages/New";
import Post from "./pages/Post";
import Posts from "./data.json"
import Edit from "./pages/Edit";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order("created_at", { ascending: true });

        setPosts(data);
    };

    fetchPosts();
  }, [toggle])

  let main = useRoutes([
    { path: "/", element: <Feed data={posts}/> },
    { path: "/new", element: <New onUpdate={setToggle}/>},
    { path: "/post/:id", element: <Post data={posts} onUpdate={setToggle}/>},
    { path: "/edit/:id", element: <Edit posts={Posts} />},
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
