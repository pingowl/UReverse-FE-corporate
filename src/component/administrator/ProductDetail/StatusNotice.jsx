import styles from './PickupDetail.module.css';

const StatusNotice = ({ text }) => (
  <div className={styles.statusNotice}>
    <p>{text}</p>
  </div>
);

export default StatusNotice;