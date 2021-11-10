import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <div className={s.avatar}>
          <img src={avatar} alt="Аватар пользователя" width="150" />
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
