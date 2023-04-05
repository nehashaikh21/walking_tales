import "../Chat.css";
import {io} from "socket.io-client";
import { useState, useContext } from "react";
import Chat from "./Chat";
import { UserContext } from "../context/UserContext";

const socket = io.connect(process.env.REACT_APP_SERVER);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

function MainChat() {
  const { user, setUser } = useContext(UserContext)
  const [username, setUsername] = useState(user.username);
  const [room, setRoom] = useState(1);
  const [showChat, setShowChat] = useState(false);

  

  const joinRoom = () => {
    if (username !== "" ) {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      
        <Chat socket={socket} username={username} room={room} />
     
    </div>
  );
}

export default MainChat;