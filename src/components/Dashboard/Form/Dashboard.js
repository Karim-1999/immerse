import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  return (
    <div className="register">
      <div className="chat-wrapper">
        <div>
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
        <Chat />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
