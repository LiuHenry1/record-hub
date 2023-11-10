import "../utils"
import { getTimeSincePost } from "../utils";
import Posts from "../data.json"

const Feed = () => {
  // Placeholder posts
  const posts = [
    {
      timestamp: new Date("2023-11-09T21:28:00-06:00"),
      title: "foo",
      upvotes: 7,
    },
  ];

  const feed = Posts.map(post => {
    const elapsedTimeRepr = getTimeSincePost(post.created_at);

    return (
      <div className="post">
        <div>Posted {elapsedTimeRepr} ago</div>
        <h4>{post.title}</h4>
        <div>{post.upvotes} upvotes</div>
      </div>
    )

  })

  return (
    <div className="feed">
      {feed}
    </div>
  );
};

export default Feed;
