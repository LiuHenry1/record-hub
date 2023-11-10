import { getTimeSincePost } from "../utils"
import { useParams } from "react-router-dom";

const Post = ({posts}) => {
  const {id} = useParams();
  const post = posts.filter(post => post.id ==id)[0];

  const elapsedTimeRepr = getTimeSincePost(post.created_at);

  return (
    <div className="detailed-post">
        <div>Posted {elapsedTimeRepr} ago</div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <div>{post.upvotes} upvotes</div>
        <div className="comment-section">
          {post.comments && post.comments.map(comment => {
            return <p>- {comment}</p>
          })}
        </div>
    </div>
  )
}

export default Post