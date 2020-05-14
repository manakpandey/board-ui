import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Chat from '../../src/Chat/Chat';
import { ChatMessage } from '../../src/Models';
import './chat.scss';
import '../../src/scss/index.scss';

import ChatCollapsed from '../../src/SvgIcons/ChatCollapsed';


function ChatController() {
  const [showChat, setShowChat] = useState(false);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply Ipsum is simply dummy text of the printing Ipsum is simply text of the printing Ipsum is simply.', timestamp: `${hours}:${minutes}`, userID: 1, username: 'Shankar' },
    { content: 'Lorem Ipsum is simply dummy', timestamp: `${hours}:${minutes}`, userID: 2, username: 'Ratan' },
    { content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the printing.', timestamp: `${hours}:${minutes}`, userID: 3, username: 'John' },
    { content: 'Hey there!', timestamp: `${hours}:${minutes}`, userID: 4, username: 'Elton' },
    { content: 'Testing GMetri Chat.', timestamp: `${hours}:${minutes}`, userID: 5, username: 'Arjun' }
  ]);

  const currentUser: {userID: number, username: String} = {userID: 2, username: 'Ratan'};

  function saveChatMessage(chatMessage: ChatMessage) {
    console.log(chatMessage);
  }

  return (
    <div style={{backgroundImage: 'url("https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/ChatBackground.svg")', height: '100vh'}}>

      {
        showChat ?
        <div className="chat_wrapper">
          <Chat chatMessages={chatMessages} currentUser={currentUser} saveChatMessage={saveChatMessage} collapseChat={() => setShowChat(false)} />
        </div> :
        <div onClick={() => setShowChat(true)}>
          <div className="chat_collapsed__outer_wrapper">
            <div className="chat_collapsed__inner_wrapper">
              <div className="chat_collapsed">
                <ChatCollapsed />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

storiesOf('Chat', module).add('Chat', () => <ChatController />);
