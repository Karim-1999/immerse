import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // const [image, setImage] = useState()
  // const [showimg, setShowimg] = useState(false)

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-wrapper">
        <div className="message-Content">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
        <div className="message-Info">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
          {/* <p>just now</p> */}
        </div>
      </div>
    </div>
  );
};

export default Message;
