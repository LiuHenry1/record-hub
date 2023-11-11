import { useParams } from "react-router-dom";
import "./Edit.css"

const Edit = ({posts}) => {
  const { id } = useParams();
  const post = posts.filter((post) => post.id == id)[0];

  return (
  <div className="form-container">
    <form className="update-post"> 
      <label for="title">Title</label>
      <input type="text" name="title" value={post.title}/>
      <label for="content">Content</label>
      <textarea type="text" name="content" value={post.content} rows={8} cols={32}/>
      <input type="button" value="Update Post" />
    </form>
  </div>);
};

export default Edit;
