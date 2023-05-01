import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import App from "../CommentSystem/App";
import Action from "../CommentSystem/Action";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [viewComments, setViewComments] = useState(post.comments.length !== 0);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleViewComments = () => {
    if (post.comments.length == 0) {
      setViewComments(!viewComments);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === post?.userId)[0]?.profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0]?.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            
            <Action
              className={
                isLiked ? "btn-reply-post new-edit" : "btn-reply-post edit"
              }
              type={isLiked ? "Liked" : "Like"}
              handleClick={(e) => likeHandler(e)}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={handleViewComments}>
              {post.comments.length === 0 ? "Comment" : "All comments"}
            </span>
          </div>
        </div>
        {viewComments ? <App datas={post.comments} /> : null}
      </div>
    </div>
  );
}
