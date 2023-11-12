import "./New.css"
import { supabase } from "../client"
import { useState } from "react";

const New = () => {
  const [post, setPost] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setPost({...post, [field]: value});
  }

  const handleClick = async(e) => {
    e.preventDefault();

    await supabase.from("Posts").insert(post).select();

    window.location = "/new"
  }

  return (
  <div className="form-container">
    <form className="new-post"> 
      <input onChange={handleChange} type="text" name="title" placeholder="Title" />
      <textarea onChange={handleChange} type="text" name="content" placeholder="Content" rows={8} cols={32}/>
      <input onClick={handleClick} type="button" value="Create Post" />
    </form>
  </div>);
};

export default New;
