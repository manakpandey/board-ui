import React from 'react';
import { storiesOf } from '@storybook/react';
// import Chat from '../../src/Chat/Chat';
import './styles.scss';

function ChatController() {

  return(
    <div className="chat_body">
      {/* <Chat /> */}
    </div>
  )
}

storiesOf('Components', module).add('Chat', () => <ChatController />);