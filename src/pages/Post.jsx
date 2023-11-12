import { getTimeSincePost } from "../utils";
import { useParams } from "react-router-dom";
import { HiOutlineChevronDoubleUp, HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Post.css";
import { useEffect, useState } from "react";
import { supabase } from "../client";

const Post = ({data, onUpdate}) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
   if (data) {
    setPost(data.filter(post => post.id == id)[0]);
    console.log(data.filter(post => post.id == id)[0]);
   }
  }, [data]);

  if (post == null) {
    return null;
  }

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentClick = async (e) => {
    await supabase
      .from("Posts")
      .update({ comments: [...post.comments, comment] })
      .eq("id", post.id)
      .select();

    setComment("");
    onUpdate(toggle => !toggle);
  };

  const handleUpvoteClick = async (e) => {
    await supabase
      .from("Posts")
      .update({ upvotes: post.upvotes + 1 })
      .eq("id", post.id)
      .select();

    onUpdate(toggle => !toggle);
  };

  const elapsedTimeRepr = getTimeSincePost(post.created_at);

  return (
    <div className="detailed-post">
      <div className="post-detail">
        <div>Posted {elapsedTimeRepr} ago</div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <div className="post-interactables">
          <div className="post-upvote">
            <HiOutlineChevronDoubleUp onClick={handleUpvoteClick}/>
            <div>{post.upvotes} upvotes</div>
          </div>
          <div className="post-update">
            <Link to={`/edit/${post.id}`}>
              <HiPencil />
            </Link>
            <HiTrash />
          </div>
        </div>
      </div>
      <div className="comment-section">
        <form className="comment-form">
          <textarea
            onChange={handleChange}
            type="text"
            name="comment"
            value={comment}
          />
          <input
            onClick={handleCommentClick}
            type="button"
            name="submit"
            placeholder="Comment"
            value="comment"
          />
        </form>
        {post.comments &&
          post.comments.map((comment) => {
            return <p>- {comment}</p>;
          })}
      </div>
    </div>
  );
};

export default Post;
