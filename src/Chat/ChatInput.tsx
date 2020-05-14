import React, { useState } from 'react';
import { ChatMessage } from '../Models';

interface Props {
  saveChatMessage: (message: ChatMessage) => void,
  currentUser: {userID: number, username: String}
}

function ChatInput({saveChatMessage, currentUser}: Props) {

  const [message, setMessage] = useState<ChatMessage>({id: '', content: '', timestamp: '', userID: 99, username: ''});

  function handleSubmit(e: any) {
    e.preventDefault();
    saveChatMessage(message);
  }
  
  function handleMessage(e: React.ChangeEvent<HTMLInputElement>) {
    const message = e.target.value;
    const update: ChatMessage = {
      id: '',
      content: message,
      timestamp: '',
      userID: currentUser.userID, 
      username: currentUser.username
    }
    setMessage(update);
  }

  return (
    <div className="chat_input">
      <form>
        <div className="input_wrapper">
          <input type="text" name="chat_message" placeholder="Write a message" ref={(input) => input = input} onChange={handleMessage}></input>
          <button className="chat_input__submit" onClick={handleSubmit}> > </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInput;