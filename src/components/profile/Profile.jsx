import PropTypes from 'prop-types';
import style from './Profile.module.css';
import defaultPhoto from '../../photos/cute-pug.jpg';

function Profile({
  userName,
  userTag,
  location,
  avatarUrl = defaultPhoto,
  userStats,
}) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatarUrl} alt={userName} className={style.avatar} />
        <p className={style.name}>{userName}</p>
        <p className={style.tag}>@{userTag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{userStats.followers}</span>
        </li>
        <li className={style.changeBorder}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{userStats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{userStats.likes}</span>
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
