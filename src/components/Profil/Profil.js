  
import React from "react";

import PropTypes from "prop-types";

import style from "./profilStyle.module.css";



export const Profil = ({username, tag, location, avatar, stats}) => {
  return (

    <div className={style.profile}>
             
  <div className={style.description}>
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p className={style.name}>{username}</p>
    <p className={style.tag}>{tag}@pmarica</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul key={username} className={style.stats}>
 
    <li className={style.statslist}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li className={style.statslist}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li className={style.statslist}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
  
</div>
  )
}
Profil.defaultProps = {
  followers: '0',
  views: '0',
  likes: '0',
}



 Profil.propTypes = {
   key: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
 };
 
 

