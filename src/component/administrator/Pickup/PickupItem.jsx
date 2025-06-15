import React from 'react';
import { useNavigate } from 'react-router-dom';
import PickupProgress from './PickupProgress';
import styles from './Pickup.module.css';

const PickupItem = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/pickup/${product.id}`); // ✅ Fixed: Backticks for template literal
  };

  const categoryFull = [product.categoryMain, product.categorySub]
    .filter(Boolean)
    .join(' ');

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
        <span className={`${styles.gradeBox} ${styles[`grade_${product.grade || 'N'}`]}`}>
          {product.grade || '-'}
        </span>
      </td>
      <td>{product.paid_point != null ? `${product.paid_point.toLocaleString()} P` : ' - '}</td>
      <td>{product.updatedAt?.split(' ')[0]}</td>
      <td style={{ maxWidth: '300px', minWidth: '140px' }}>
        <PickupProgress currentState={product.status?.toUpperCase()} />
      </td>
    </tr>
  );
};

export default PickupItem;
