
import PropTypes from "prop-types";

export const TransactionHistry = ({items}) => {
return (

<table class="transaction-history">

  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({type, amount, currency, id}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   ))}
  </tbody>

</table>

)

}

TransactionHistry.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}



