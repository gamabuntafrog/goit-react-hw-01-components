import PropTypes from 'prop-types'; 
import UserStatisticGallery from './UserStatisticGallery';

const UserStatistic = ({title ,stats}) => {
  return <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
    {stats.map((el) => {
       return <UserStatisticGallery key={el.id} label={el.label} percentage={el.percentage} />
    })}
    </ul>  
</section>
}

UserStatistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })),
}

export default UserStatistic;

