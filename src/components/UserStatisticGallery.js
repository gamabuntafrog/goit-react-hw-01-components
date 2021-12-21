import PropTypes from 'prop-types'; 

const UserStatisticGallery = ({ label, percentage }) => {
    return <li className="item">
        <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
           </li> 
}

UserStatisticGallery.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default UserStatisticGallery;

