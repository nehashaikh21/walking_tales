import TextField from "@material-ui/core/TextField";
import React, { useEffect, useRef, useState, useContext } from "react";
import io from "socket.io-client";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Chat() {
  const { user, setUser } = useContext(UserContext);

  const [state, setState] = useState({ message: "", name: user.username });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_SERVER);
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="card-chat">
        <Form onSubmit={onMessageSubmit}>
          <center>
            <div className="render-chat justify-content-center">
              <h1>Chat</h1>
              <hr />
              {renderChat()}
            </div>
          </center>

          <br />
          <div className="name-field d-none">
            <TextField
              name="name"
              onChange={(e) => onTextChange(e)}
              value={user.username}
              label="Name"
            />
          </div>
          <div>
            <TextField
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
              style={{ minWidth: "550px" }}
            />
          </div>
          <br />
          <Button
            onClick={onMessageSubmit}
            style={{ color: "white", background: "#073648" }}
          >
            Send
          </Button>
        </Form>
        {/* <div className="render-chat">
                <h1>Chat</h1>  
                {renderChat()}
            </div> */}
      </div>
    </>
  );
}

export default Chat;
