import { Link } from "react-router-dom";
import "../utils";
import { getTimeSincePost } from "../utils";

const Feed = ({ posts }) => {
  const feed = posts.map((post) => {
    const elapsedTimeRepr = getTimeSincePost(post.created_at);

    return (
      <Link to={`/post/${post.id}`}>
        <div className="post">
          <div>Posted {elapsedTimeRepr} ago</div>
          <h4>{post.title}</h4>
          <div>{post.upvotes} upvotes</div>
        </div>
      </Link>
    );
  });

  return <div className="feed">{feed}</div>;
};

export default Feed;
