
import PropTypes from "prop-types";
import style from './transactionHistory.module.css'
export const TransactionHistry = ({items}) => {
return (

<table className={style.transactionHistory}>

  <thead className={style.transaction}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={style.history}>
      {items.map(({type, amount, currency, id}) => (
    <tr key={id}>
      <td className={style.blockModul}>{type}</td>
      <td className={style.blockModul}>{amount}</td>
      <td className={style.blockModul}>{currency}</td>
    </tr>
   ))}
  </tbody>

</table>

)

}

TransactionHistry.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}



