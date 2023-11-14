import "./App.css";
import { useRoutes, Link } from "react-router-dom";
import { IoIosFitness } from "react-icons/io";
import Feed from "./pages/Feed";
import New from "./pages/New";
import Post from "./pages/Post";
import Edit from "./pages/Edit";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [posts, setPosts] = useState([]);
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState({
    orderBy: "created_at",
    condition: { ascending: true },
  });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const toSearch = e.target.value.toLowerCase();

    setSearch(toSearch);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order(sort.orderBy, sort.condition);

      setPosts(data);
    };

    fetchPosts();
  }, [toggle, sort]);

  const filterPosts = () => {
    if (search == "") {
      setPostsToDisplay(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search)
      );
      setPostsToDisplay(filteredPosts);
    }
  }

  useEffect(() => {
    filterPosts();
  }, [search, posts]);

  let main = useRoutes([
    { path: "/", element: <Feed data={postsToDisplay} updateSort={setSort} /> },
    { path: "/new", element: <New onUpdate={setToggle} /> },
    { path: "/post/:id", element: <Post data={posts} onUpdate={setToggle} /> },
    { path: "/edit/:id", element: <Edit data={posts} onUpdate={setToggle} /> },
  ]);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <IoIosFitness className="icon" />
          <h4>Record Hub</h4>
        </div>
        <div className="header-search">
          <input onChange={handleChange} type="text" placeholder="Search..." />
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
