import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name }) => {
    return <li className="friend-item">
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
}

export default FriendListItem;