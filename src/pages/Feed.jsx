import { Link } from "react-router-dom";
import "../utils";
import { getTimeSincePost } from "../utils";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import _ from "lodash";

const Feed = ({ data, updateSort }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const handleClick = (e) => {
    const orderBy = e.target.dataset.order;
    const newSort = {orderBy: orderBy, condition: {ascending: false }};
    updateSort((prevSort) => {
      if (_.isEqual(prevSort, newSort)) {
        return {orderBy: "created_at", condition: {ascending: true}};
      } 
      return newSort;
    })
  }

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

  return (
    <>
      <div className="feed-interactables">
        <input onClick={handleClick} type="button" data-order="created_at" value="Newest" />
        <input onClick={handleClick} type="button" data-order="upvotes" value="Most Popular" />
      </div>
      <div className="feed">{feed}</div>
    </>
  );
};

export default Feed;
