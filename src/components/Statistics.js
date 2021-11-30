
import PropTypes from "prop-types";


export const Statistics = ({statistics}) => {
    return (
<section class="statistics">
  <h2 class="title">Upload stats</h2>
<ul class="stat-list">

  {statistics.map(({id, label, percentage}) => (
    <li class="item" key={id}>
    
    <span class="label">.{label}</span>
    <span  class="label">.{percentage}</span> 
      
    </li>
    ))} 

  </ul>
</section>

    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
    statistics: PropTypes.array.isRequired
}


// {/* <ul class="stat-list">
//     <li class="item">
//       <span class="label">.{label}</span>
//       <span class="percentage">{percentage}</span>
//     </li> */}
// {/* <li class="item">
// <span class="label">.mp3</span>
// <span class="percentage">14%</span>
// </li>
// <li class="item">
// <span class="label">.pdf</span>
// <span class="percentage">41%</span>
// </li>
// <li class="item">
// <span class="label">.mp4</span>
// <span class="percentage">12%</span>
// </li> */}