import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types'

const FriendList = ({props}) => {
    return <ul className="friend-list">
        {props.map((el) => {
            return <FriendListItem
                key={el.id}
                avatar={el.avatar}
                name={el.name}
            />
        })}
    </ul>


}

FriendList.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}

export default FriendList