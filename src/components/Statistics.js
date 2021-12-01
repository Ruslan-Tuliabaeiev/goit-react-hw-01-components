
import PropTypes from "prop-types";


export const Statistics = ({title, stats}) => {
    return (
      <>
<section class="statistics">
  <h2 class="title">{title}</h2>
<ul class="stat-list">

  {stats.map(({id, label, percentage}) => (
    <li class="item" key={id}>
    
    <span class="label">.{label}</span>
    <span  class="label">.{percentage}</span> 
      
    </li>
    ))} 

  </ul>
</section>
</>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
    statistics: PropTypes.array.isRequired
}

