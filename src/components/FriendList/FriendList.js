import React from "react";
import PropTypes from "prop-types";

import style from './friendStyle.module.css';


export const FriendList = ({friends}) => {
    return (
<ul className={style.friends}>
       {friends.map(({id,  avatar, name, isOnline }) => (
      
      <li class={style.item} key={id}>
  <span className={isOnline ? style.statusOnline : style.statusOffline}></span>
  <img className={style.avatar}
   src={avatar}
   alt="User avatar"
    width="100" />
  <p className={style.name}>{name}</p>
</li>)) }
      </ul> 
    )
}
//isOnline  <span class="status" ></span>
//<span className={isOnline ? friendStyles.statusOnline : friendStyles.statusOffline}></span>


FriendList.propTypes = {
  id: PropTypes.number.isRequired,
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
friend: PropTypes.array.isRequired,

}
