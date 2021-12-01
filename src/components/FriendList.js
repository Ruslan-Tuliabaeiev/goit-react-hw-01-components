import React from "react";
import PropTypes from "prop-types";


export const FriendList = ({friends}) => {
    return (
<ul class="friend-list">
       {friends.map(({id,  avatar, name }) => (
      
      <li class="item" key={id}>
  <span class="status" ></span>
  <img class="avatar"
   src={avatar}
   alt="User avatar"
    width="48" />
  <p class="name">{name}</p>
</li>)) }
      </ul> 
    )
}
//isOnline
//<span className={isOnline ? friendStyles.statusOnline : friendStyles.statusOffline}></span>


FriendList.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
friend: PropTypes.array.isRequired
}
