import React from 'react';
import ChatLine from './ChatLine';
import { ChatMessage } from '../Models';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: {userID: number, username: String}
}

function ChatGroup({chatMessages, currentUser}: Props) {

  const colors = ['#94cfe4', '#beb2ef', '#f9cc87', '#b1debc', '#f684b7']

  return (
    <div className="chat_group">
      {
        chatMessages.map(message => <ChatLine key={message.userID} color={colors[message.userID - 1]} username={message.username} currentUser={currentUser} time={message.timestamp} content={message.content}  />)
      }
    </div>
  )
}

export default ChatGroup;