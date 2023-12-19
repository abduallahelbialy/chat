/* eslint-disable no-unused-vars */
import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    // {
    //   key: 1,
    //   image:
    //     "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A",
    //   type: "",
    //   msg: "السلام عليكم اخبارك اى ؟",
    // },
    // {
    //   key: 2,
    //   image:
    //     "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/306654934_2210820469099482_3047836179128221661_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KsBz_1BTiQEAX_E2uHs&_nc_ht=scontent-hbe1-2.xx&oh=00_AfB-NBfCk_TB1GxyIqQQqsJfMyzgKgsOH34U8gBRIVEr8w&oe=65865C9A",
    //   type: "other",
    //   msg: "الحمدلله بخير",
    // },
    {
      key: 3,
      image:
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/306654934_2210820469099482_3047836179128221661_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KsBz_1BTiQEAX_E2uHs&_nc_ht=scontent-hbe1-2.xx&oh=00_AfB-NBfCk_TB1GxyIqQQqsJfMyzgKgsOH34U8gBRIVEr8w&oe=65865C9A",
      type: "other",
      msg: "وانت عامل اى؟",
    },
    {
      key: 4,
      image:
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A",
      type: "",
      msg: "الحمدلله كله تمام",
    },
    {
      key: 5,
      image:
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A",
      type: "other",
      msg: "هتروح فين انهارده؟",
    },
    {
      key: 6,
      image:
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/306654934_2210820469099482_3047836179128221661_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KsBz_1BTiQEAX_E2uHs&_nc_ht=scontent-hbe1-2.xx&oh=00_AfB-NBfCk_TB1GxyIqQQqsJfMyzgKgsOH34U8gBRIVEr8w&oe=65865C9A",
      type: "",
      msg: "هروح شرم الشيخ",
    },
    {
      key: 7,
      image:
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A",
      type: "other",
      msg: "خلاص انا جاى ",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/306654934_2210820469099482_3047836179128221661_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KsBz_1BTiQEAX_E2uHs&_nc_ht=scontent-hbe1-2.xx&oh=00_AfB-NBfCk_TB1GxyIqQQqsJfMyzgKgsOH34U8gBRIVEr8w&oe=65865C9A"
              />
              <p>Eng Hmadi</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
