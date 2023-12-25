/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">
            {this.props.msg}

            {this.props.fileImage != null && (
              <img
                src={this.props.fileImage}
                width="100%"
                height={100}
                alt=""
              />
            )}

            {this.props.fileVideo != null && (
              <iframe width="100%" height="100" title="___" src={this.props.fileVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            )}
          </div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
