import React from 'react';

interface Props {
  color: String,
  username: String,
  currentUser: {userID: number, username: String},
  time: String
  content: String,
}

function ChatLine({ color, username, currentUser, time, content }: Props) {
  
  return (
    <div className={"chatline_wrapper " + (username === currentUser.username ? 'right' : '')}>
      <div className="chatline">
        <div className={"initial "} style={{ color: `${color}`, border: '2px solid '+`${color}` }}>
          {username.charAt(0)}
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <span className="time">{time}</span>
      </div>
    </div>
  )
}

export default ChatLine;