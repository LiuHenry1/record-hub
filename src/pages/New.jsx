import "./New.css"
const New = () => {
  return (
  <div className="form-container">
    <form className="new-post"> 
      <input type="text" name="title" placeholder="Title" />
      <textarea type="text" name="content" placeholder="Content" rows={8} cols={32}/>
      <input type="button" value="Create Post" />
    </form>
  </div>);
};

export default New;
