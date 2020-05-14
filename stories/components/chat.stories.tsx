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
    { id: '124338432961296_1', content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply Ipsum is simply dummy text of the printing Ipsum is simply text of the printing Ipsum is simply.', timestamp: `${hours}:${minutes}`, userID: 1, username: 'Shankar' },
    { id: '124338432961296_2', content: 'Lorem Ipsum is simply dummy', timestamp: `${hours}:${minutes}`, userID: 2, username: 'Ratan' },
    { id: '124338432961296_3', content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the printing.', timestamp: `${hours}:${minutes}`, userID: 3, username: 'John' },
    { id: '124338432961296_4', content: 'Hey there!', timestamp: `${hours}:${minutes}`, userID: 4, username: 'Elton' },
    { id: '124338432961296_5', content: 'Testing GMetri Chat.', timestamp: `${hours}:${minutes}`, userID: 5, username: 'Arjun' }
  ]);

  const messages = [
    {
      
      userid: 1,
      username: "Amit",
      timestamp: 124338432961296, // Date.now() this is just for representation, this will contain something like: 124338432961296
      content: "Yolo",
    },
    {
      id: '124338432961296_2', // <timestamp_userid>
      userid: 2,
      username: "Jack",
      timestamp: 124338432961296,
      content: "Yolo",
    },
    {
      id: '124338432961296_3', // <timestamp_userid>
      userid: 3,
      username: "John",
      timestamp: 124338432961296,
      content: "Yolo",
    },
    {
      id: '124338432961296_4', // <timestamp_userid>
      userid: 4,
      username: "Kristen",
      timestamp: 124338432961296,
      content: "Yolo",
    },
    {
      id: '124338432961296_5', // <timestamp_userid>
      userid: 5,
      username: "Ram",
      timestamp: 124338432961296,
      content: "Jai Shree Ram",
    },
    {
      id: '124338432961296_6', // <timestamp_userid>
      userid: 6,
      username: "Amit",
      timestamp: 124338432961296,
      content: "Jai Shree Ram aplo bhi!",
    },
  ];




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
