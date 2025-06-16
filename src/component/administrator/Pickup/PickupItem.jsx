import React from 'react';
import { useNavigate } from 'react-router-dom';
import PickupProgress from './PickupProgress';
import styles from './Pickup.module.css';
import GradeBadge from '../../common/Product/GradeBadge';

const PickupItem = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/pickup/${product.id}`);
  };

  const categoryFull = [product.categoryMain, product.categorySub]
    .filter(Boolean)
    .join('/');

  return (
    <tr className={styles.row} onClick={handleClick}>
      <td>
        {product.image ? (
          <img src={product.image} alt={product.brand} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>이미지 없음</div>
        )}
      </td>
      <td>
        <strong>{product.brand}</strong>
      </td>
      <td>
        <strong>{categoryFull}</strong>
      </td>
      <td>
        {product.grade ? (
          <GradeBadge grade={product.grade} />
        ) : (
          <span>-</span>
        )}

      </td>
      <td>{product.paid_point != null ? `${product.paid_point.toLocaleString()} P` : ' - '}</td>
      <td>{product.updatedAt?.split(' ')[0]}</td>
      <td style={{ width: '200px'}}>
        <PickupProgress currentState={product.status?.toUpperCase()} />
      </td>
    </tr>
  );
};

export default PickupItem;
