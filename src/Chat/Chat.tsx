import React from 'react';
import ChatGroup from './ChatGroup';
import ChatInput from './ChatInput';
import { ChatMessage } from '../Models';

import DownArrow from '../SvgIcons/DownArrow';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: {userID: number, username: String}
  saveChatMessage: (message: ChatMessage) => void,
  collapseChat: () => void
}

function Chat({chatMessages, currentUser, saveChatMessage, collapseChat}: Props) {
  return (
    <div className="chat">
      <div className="down_arrow_wrapper" onClick={collapseChat}>
        <DownArrow />
      </div>

      <ChatGroup chatMessages={chatMessages} currentUser={currentUser} />
      <ChatInput saveChatMessage={saveChatMessage} currentUser={currentUser} />
    </div>
  )
}

export default Chat;