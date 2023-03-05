import React, { useContext, useState, useEffect } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import "./subcomponents/chat.css"

const Chat = () => {
  const { data } = useContext(ChatContext);
  const [ show, setShow ] = useState("none");
  
useEffect(() => {
  setShow(c => {
    return data.user.displayName ? c = "flex" : c = "none";
  })
}, [data.user.displayName])


  return (
    <div className="chat-dashboard">
      <h1 className="chat-dashboard-title">Chat</h1>
      <div className="chatWrapper">
        <div className="chatDisplay">
          <div style={{display: show}} className="chatInfo">
            <span >{data.user?.displayName}</span>
            <div className="chatIcons">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <Messages />
        </div>
        <Input show={show} />
      </div>
    </div>
  );
};

export default Chat;
