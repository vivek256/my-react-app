import "./styles.css";
import data from "../../data.json";
import Comment from "./Comment";
import useNode from "./customHook/useNode";
import { useState, useEffect } from "react";
import Action from "./Action";

export default function App({ datas }) {
  let value = datas;

  var userNames = ["@" + data.currentUser.username];

  function addingUserNames(arr = datas) {
    for (let x of arr) {
      userNames.push("@" + x.user.username);

      addingUserNames(x["replies"]);
    }
  }
  addingUserNames();

  userNames = [...new Set(userNames)]; //adding usernames for making it dark purple inside comment box

 
  // const getLocalItems = () => {
  //   let list = localStorage.getItem("items");

  //   if (list) {
  //     return JSON.parse(localStorage.getItem("items"));
  //   } else {
  //     return value;
  //   }
  // };

  const [commentsData, setCommentsData] = useState(datas);
  const [userNameList] = useState(userNames);

  const [input, setInput] = useState("");


  const { insertNode, editNode, deleteNode, addScore } = useNode();

  const handleInsertNode = (folderId, item, score) => {
    const finalStructure = insertNode(commentsData, folderId, item, score);

    setCommentsData(finalStructure);
  };

  const handleEditNode = (parentId, value, position, id) => {
    const finalStructure = editNode(
      commentsData,
      parentId,
      value,
      position,
      id
    );
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    setCommentsData([...finalStructure]);
  };

  const handleScore = (folderId, score) => {
    const finalStructure = addScore(commentsData, folderId, score);
    setCommentsData([...finalStructure]);
  };

  function autoResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    var text = e.target.value;

    setInput(text);
  }

  const handleComment = (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      if (input.trim().length !== 0) {
        const newData = [...commentsData];
        newData.push({
          id: new Date().getTime(),
          content: input,
          user: data.currentUser,
          replies: [],
          likes: [],
          score: 0
        });
        setCommentsData(newData);
        e.target.value = "";
        setInput("");
      }
    } else if (e.type == "click") {
      if (input.trim().length !== 0) {
        const newData = [...commentsData];
        newData.push({
          id: new Date().getTime(),
          content: input,
          user: data.currentUser,
          replies: [],
          likes: [],
          score: 0
        });
        setCommentsData(newData);
        e.target.value = "";
        setInput("");
      }
    }
  };

  return (
    <>
      <div className="App">
        {commentsData?.map((cmnt) => {
          return (
            <Comment
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleEditNode={handleEditNode}
              handleScore={handleScore}
              id={cmnt.id}
              replies={cmnt.replies}
              parentData={commentsData}
              content={cmnt.content}
              image={cmnt.user.image}
              username={cmnt.user.username}
              currentUser={data.currentUser.username}
              replyingTo={cmnt.replyingTo}
              cmntLikes={cmnt.likes}
              createdAt={cmnt.createdAt}
              userNameList={userNameList}
              widthContainer={600}
              nested={0}
            />
          );
        })}
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
            placeholder="Write a comment..."
          ></textarea>
          <Action
            type={"Comment"}
            className="reply-btn-main"
            handleClick={handleComment}
          />
        </div>
      </div>
    </>
  );
}
