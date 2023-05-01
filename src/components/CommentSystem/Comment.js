import Action from "./Action";
import data from "../../data.json";
import { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";

let deletWarningText =
  "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
export default function Comment({
  content,
  replies,
  username,
  currentUser,
  handleEditNode,
  handleDeleteNode,
  handleInsertNode,
  id,
  parentData,
  image,
  cmntLikes,
  nested,
  createdAt,
  userNameList,
  widthContainer,
  handleScore
}) {
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [plus, setPlus] = useState(true);
  const [minus, setMinus] = useState(true);
  const [input, setInput] = useState("");
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const someValue = useRef(false);
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    if (someValue.current) {
      someValue.current = false;

      handleScore(id, currentUser);
    }
  }, [likeState]);

  const addComment = () => {
    if (editMode) {
      const details = {};
      function checkParent(arr, obj = {}) {
        for (let x in arr) {
          if (arr[x]["id"] == id) {
            details.parentId = obj["id"];
            details.position = x;

            break;
          }

          for (let y in arr[x]["replies"]) {
            if (arr[x]["replies"][y]["id"] == id) {
              details.parentId = arr[x]["id"];
              details.position = y;
              break;
            }
            checkParent(arr[x]["replies"][y]["replies"], arr[x]["replies"][y]);
          }
        }
      }

      checkParent(parentData, {});
      setEditMode(false);
      handleEditNode(details.parentId, input, details.position, id);
      setShowInput(false);
      setInput("");
    } else {
      handleInsertNode(id, input);

      setShowInput(false);
      setInput("");
    }
  };

  const deleteWarning = () => {
    setShowDeleteWarning(true);
  };

  const handleDelete = () => {
    handleDeleteNode(id);
    setShowDeleteWarning(false);
  };

  const handleEdit = (e) => {
    setEditMode(true);
  };

  function autoResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    var text = e.target.value;

    userNameList.forEach((val) => {
      text = text.replaceAll('<b className="edit">' + val + "</b>", val);
    });

    setInput(text);
  }

  const handleComment = (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      if (input.trim().length !== 0) {
        addComment(e);
      }
    } else {
      if (e.type === "click") {
        if (input.trim().length !== 0) {
          setShowInput(false);
          addComment(e);
        }
      }
    }
  };

  const handleLike = (e) => {
    setLikeState(!likeState);
    someValue.current = true;
  };

  // const handleScoreFinal = (val) => {
  //   if (val === "minus") {
  //     setMinus(!minus);
  //     someValue.current = true;
  //   } else if (val === "plus") {
  //     setPlus(!plus);
  //     someValue.current = true;
  //   }
  // };

  let commentContent = content;

  userNameList.forEach((val) => {
    const regex = new RegExp(`${val}`, "gi");
    commentContent = commentContent.replaceAll(
      regex,
      '<b className="edit">' + val + "</b>"
    );
  });

  function DeleteWarning() {
    return (
      <div className="warning" style={{ opacity: "1", background: "white" }}>
        <b style={{ fontSize: "20px", marginLeft: "10px" }}>Delete comment</b>
        <div style={{ color: "grey", fontWeight: "200", padding: "10px" }}>
          {deletWarningText}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{ backgroundColor: "rgb(104,113,126)" }}
            onClick={() => setShowDeleteWarning(false)}
          >
            NO, CANCEL
          </button>
          <button
            style={{ backgroundColor: "rgb(235,100,104)" }}
            onClick={() => handleDelete()}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {showDeleteWarning && <DeleteWarning />}
      {editMode ? (
        <div className="reply-container">
          <img
            src={data.currentUser.image.png}
            alt="user"
            style={{ width: "35px", height: "35px" }}
          />
          <textarea
            autoFocus
            onInput={(e) => autoResize(e)}
            onKeyUp={handleComment}
          >
            {content}
          </textarea>
          <Action
            type={"Update"}
            className="reply-btn-main"
            name="Edit"
            handleClick={(e) => {
              handleComment(e);
              setEditMode(false);
            }}
          />
        </div>
      ) : (
        <div
          className="comment-outer-container"
          style={{ width: widthContainer }}
        >
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              paddingRight: "20px",
              width: "600px"
            }}
          >
            <div className="avatar">
              <div className="img-container" style={{ display: "flex" }}>
                <img
                  src={image.png}
                  alt="user"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                />
                <div
                  className="username"
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    textAlign: "left",
                    fontWeight: "600"
                  }}
                >
                  {username}
                </div>
                
              </div>
            </div>
            <div
              className="content"
              style={{
                color: "black",
                whiteSpace: "pre-wrap",
                fontWeight: "400",
                marginTop: "10px",
                paddingRight: "15px"
              }}
            >
              {parse(commentContent)}
            </div>
            <div style={{ flexGrow: "0", flexShrink: "0" }}>
              

              <div className="reply">
                {username === currentUser ? (
                  <>
                    <Action
                      className={
                        likeState ? "btn-reply new-edit" : "btn-reply edit"
                      }
                      type={likeState ? "Liked" : "Like"}
                      handleClick={(e) => handleLike(e)}
                    />
                    &nbsp;&nbsp;
                    <Action
                      className="btn-reply edit"
                      type={"Reply"}
                      handleClick={() => setShowInput(!showInput)}
                    />
                    <div style={{ float: "right" }}>
                      <Action
                        className="btn-reply edit"
                        type={"Delete"}
                        handleClick={() => deleteWarning()}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Action
                        className="btn-reply edit"
                        type={"Edit"}
                        handleClick={(e) => handleEdit()}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Action
                      className={
                        likeState ? "btn-reply new-edit" : "btn-reply edit"
                      }
                      type={likeState ? "Liked" : "Like"}
                      handleClick={(e) => handleLike(e)}
                    />
                    &nbsp;&nbsp;
                    <Action
                      className="btn-reply edit"
                      type={"Reply"}
                      handleClick={() => setShowInput(!showInput)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginLeft: nested > 1 ? "0px" : "60px", display: "flex" }}>
        <div>
          {showInput ? (
            <>
              <div
                className="reply-container"
                style={{ width: widthContainer - 30 }}
              >
                <img
                  src={data.currentUser.image.png}
                  alt="user"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
                <textarea
                  autoFocus
                  onInput={(e) => autoResize(e)}
                  onKeyUp={handleComment}
                ></textarea>
                <Action
                  type={"Reply"}
                  className="reply-btn-main"
                  handleClick={(e) => {
                    handleComment(e);
                  }}
                />
              </div>
            </>
          ) : null}
          {replies?.map((cmnt) => {
            return (
              <Comment
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleEditNode={handleEditNode}
                id={cmnt.id}
                replies={cmnt.replies}
                parentData={parentData}
                content={cmnt.content}
                image={cmnt.user.image}
                username={cmnt.user.username}
                currentUser={data.currentUser.username}
                replyingTo={cmnt.replyingTo}
                cmntLikes={cmnt.likes}
                createdAt={createdAt}
                userNameList={userNameList}
                widthContainer={
                  nested <= 1 ? widthContainer - 60 : widthContainer
                }
                handleScore={handleScore}
                nested={nested + 1}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
