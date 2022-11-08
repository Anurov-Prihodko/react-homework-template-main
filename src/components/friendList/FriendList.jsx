import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FriendList;
