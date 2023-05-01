import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { Posts } from "../../dummyData";
import { useState } from "react";
import { storage } from "../../firebaseConfig";
import {ref, uploadBytes} from 'firebase/storage'
import { upload } from "@testing-library/user-event/dist/upload";


export default function Share({ handlePost }) {
  const [inputValue, setInputValue] = useState();
  const [imageUpload,setImageUpload] = useState(null);

  const uploadImage= () => {

    if (imageUpload == null) return
  
    const imageRef = ref(storage,`assets/post/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image uploaded');
    })

  }

  const handleShare = () => {
    handlePost(inputValue);
    uploadImage();
  };

  

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <textarea
            placeholder="What's in your mind Vivek?"
            className="shareInput"
            onInput={(e) => setInputValue(e.target.value)}
          ></textarea>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <input className="shareOptionText" type="file" onChange={(e) => {setImageUpload(e.target.files)}}/>
            </div>
          </div>
          <button className="shareButton" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
