import React from "react";
import PropTypes from "prop-types";

import style from './friendStyle.module.css';
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
<ul className={style.friends}>
       {friends.map(({id,  avatar, name, isOnline }) => (
        <li className={style.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
 
)) }
      </ul> 
    )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,

}
