/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";

function formatDate(date) {
  return Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      {/* span[className={styles.emoji}]{{emoji}} */}
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
