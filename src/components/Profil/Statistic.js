

import PropTypes from "prop-types";

import style from "./statistic.module.css";


export const Statistic = ({followers, views, likes}) => {
    return (
        <div>
        <ul  className={style.stats}>
 
        <li className={style.statslist}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.statslist}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.statslist}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
      
    </div>
      )
    }

    Statistic.defaultProps = {
      followers: '0',
      views: '0',
      likes: '0',
    }


    Statistic.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
      };

export default Statistic