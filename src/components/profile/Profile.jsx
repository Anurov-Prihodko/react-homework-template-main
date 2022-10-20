import PropTypes from 'prop-types';

import defaultPhoto from '../../photos/cute-pug.jpg';

function Profile({
  userName,
  userTag,
  location,
  avatarUrl = defaultPhoto,
  userStats,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatarUrl} alt={userName} className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{userTag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userStats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userStats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userStats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  userStats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
