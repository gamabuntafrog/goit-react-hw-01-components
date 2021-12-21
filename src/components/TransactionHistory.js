import TransactionItem from './TransictionItem';
import PropTypes from 'prop-types';

const TransationHistory = ({props}) => {
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {props.map((el) => {
        return <TransactionItem
          key={el.id}
          type={el.type}
          amount={el.amount}
          currency={el.currency}
        />
    })}
  </tbody>
</table>
}

TransationHistory.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  }))
}

export default TransationHistory;