

import PropTypes from 'prop-types'
import style from './friendStyle.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.statusOnline : style.statusOfline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="100" />
      <p className={style.name}>{name}</p>
    </li>
  )
}

//
//
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}