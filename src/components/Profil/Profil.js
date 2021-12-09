  
import React from "react";

import PropTypes from "prop-types";

import style from "./profilStyle.module.css";
 import Statistic  from "./Statistic.js";


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

  <Statistic followers={stats.followers}
  views={stats.views}
  likes={stats.likes}
  />
</div>
  )
}




 Profil.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
  PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
  }).isRequired,
  ).isRequired,
};


 
 

