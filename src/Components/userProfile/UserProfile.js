/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return
    //  (
    //   <div className="main__userprofile">
    //     <div className="profile__card user__profile__image">
    //       <div className="profile__image">
    //         <img src="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/372908317_3572568199677398_3905450982413680686_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd92f5&_nc_ohc=AGptUpOe05cAX9QoYv_&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDtbepw2YRqlHCXcOugejM1mq6HCQ5Cb7kLsApr32vDrw&oe=6585B84A" />
    //       </div>
    //       <h4>Abdallah Elbialy</h4>
    //       <p>FrontEnd Devloper</p>
    //     </div>
    //     <div className="profile__card">
    //       <div className="card__header" onClick={this.toggleInfo}>
    //         <h4>Information</h4>
    //         <i className="fa fa-angle-down"></i>
    //       </div>
    //       <div className="card__content">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    //         ultrices urna a imperdiet egestas. Donec in magna quis ligula
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
