import data from "../../../data.json";

const useNode = () => {
  const insertNode = function (tree, commentId, item, score) {
    function addNode(val) {
      if (Array.isArray(val)) {
        for (let x of val) {
          if (x["id"] === commentId) {
            x.replies.push({
              id: new Date().getTime(),
              content: item,
              user: data.currentUser,
              replies: [],
              score: 0,
              likes: []
            });
            break;
          }

          addNode(x["replies"]);
        }
      }
    }

    addNode(tree);

    return [...tree];
  };

  const addScore = function (tree, id, score) {
    addScoreFinal();

    function addScoreFinal(arr = tree) {
      for (let x of arr) {
        if (x["id"] == id) {
          // x.likes.forEach((val, index) => {
          //   if (val === score) {
          //     x.likes.splice(index, 1);
          //   }
          // });
          x.likes.push(score);
          break;
        }

        addScoreFinal(x["replies"]);
      }
    }
    return [...tree];
  };

  const editNode = function (tree, parentId, value, position, id, score) {
    function editNodeFinal(tree, position, parentId, score) {
      if (Array.isArray(tree)) {
        if (parentId === undefined) {
          tree[position].id = new Date().getTime();
          tree[position].content = value;
          tree[position].likes = [];
          tree[position].score = score;
          return;
        }

        for (let x of tree) {
          if (x["id"] == parentId) {
            x.replies[position].content = value;
            x.replies[position].id = new Date().getTime();
            x.replies[position].likes = [];
            x.replies[position].score = score;
            break;
          }

          if (parentId !== undefined) {
            editNodeFinal(x["replies"], position, parentId);
          }
        }
      }
    }

    editNodeFinal(tree, position, parentId);

    return [...tree];
  };

  const deleteNode = function (tree, id) {
    removeComment();
    function removeComment(arr = tree) {
      for (let x in arr) {
        if (arr[x].id == id) {
          arr.splice(x, 1);
          break;
        }
        if (arr[x].replies.length !== 0) {
          removeComment(arr[x].replies);
        }
      }
    }
    return [...tree];
  };

  return { insertNode, editNode, deleteNode, addScore };
};

export default useNode;
