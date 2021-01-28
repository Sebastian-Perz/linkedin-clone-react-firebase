import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Subscriptions,
  Image,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7a33e" />
          <InputOption title="Event" Icon={EventNote} color="#c0cbcd" />
          <InputOption title="Article" Icon={CalendarViewDay} color="#7fc15e" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            photoUrl={photoUrl}
            description={description}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
