import React from "react";
import "./Input.css";

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a Message.."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      ></input>
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form>
  );
}

export default Input;
