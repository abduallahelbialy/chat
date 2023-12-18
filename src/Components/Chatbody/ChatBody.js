import React from 'react'
import "./ChatBody.css"
import ChatList from '../chatList/ChatList';
import ChatContent from '../chatContent/ChatContent';
import UserProfile from '../userProfile/UserProfile';

const ChatBody = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
    <UserProfile/>
    </div>
  );
}

export default ChatBody