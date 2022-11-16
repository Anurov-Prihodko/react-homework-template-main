import PropTypes from 'prop-types';
import clsx from 'clsx';

// import getRandomColor from 'utils/getRandomColor';
import style from './Statistics.module.css';

function Statistics({ title, stats, changeColor }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={clsx(style.item, {
              backgroundColor: changeColor,
            })}
          >
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
