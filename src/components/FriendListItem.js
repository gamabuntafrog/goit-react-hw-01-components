import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className="friend-item">
        <span className="status" style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
}

export default FriendListItem;