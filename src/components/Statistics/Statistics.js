
import PropTypes from "prop-types";
import style from './statisticsStyle.module.css'

export const Statistics = ({title, stats}) => { 
    return (
      <>
<section className={style.statistics}>
{title && <h2 className={style.title}>{title}</h2>}
 
<ul className={style.statlist}>

  {stats.map(({id, label, percentage}) => (
    <li className={style.item} key={id}>
    
    <span className={style.label}>.{label}</span>
    <span  className={style.label}>.{percentage}</span> 
      
    </li>
    ))} 

  </ul>
</section>
</>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  
}

