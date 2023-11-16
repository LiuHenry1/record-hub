import { useParams } from "react-router-dom";
import "./Edit.css";
import { useEffect, useState } from "react";
import { supabase } from "../client";

const Edit = ({ data, onUpdate }) => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (data) {
      setPost(data.filter((post) => post.id == id)[0]);
    }
  }, [data]);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setPost({ ...post, [field]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        content: post.content,
      })
      .eq("id", id)
      .select();

    alert("Updated!");
    onUpdate((toggle) => !toggle);
  };

  return (
    <>
      {post && (
        <div className="form-container">
          <form className="update-post">
            <label for="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={post.title}
            />
            <label for="content">Content</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="content"
              value={post.content}
              rows={8}
              cols={32}
            />
            <input
              className="edit-submit"
              onClick={handleClick}
              type="button"
              value="Update Post"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Edit;
