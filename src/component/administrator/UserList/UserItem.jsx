import React from 'react';
import styles from './User.module.css';

const UserItem = ({ user, index }) => {
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.bold}>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.point.toLocaleString()} P</td>
      <td>
        <div className={styles.salesBox}>{user.sales} 건</div>
      </td>
      <td>{user.createdAt}</td>
    </tr>
  );
};

export default UserItem;
