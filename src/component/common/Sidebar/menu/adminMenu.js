import dashboard from '../../../../assets/images/sidebar/dashboard.png';
import product from '../../../../assets/images/sidebar/product.png';
import pickup from '../../../../assets/images/sidebar/pickup.png';
import user from '../../../../assets/images/sidebar/user.png';

const adminMenuItems = [
  { label: '대시보드', icon: dashboard, path: '/admin' },
  { label: '상품 관리', icon: product, path: '/admin/product' },
  { label: '수거 관리', icon: pickup, path: '/admin/pickup' },
  { label: '사용자 관리', icon: user, path: '/admin/user' },
];

export default adminMenuItems;
