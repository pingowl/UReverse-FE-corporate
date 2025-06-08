import waiting from '../../../../assets/images/sidebar/dashboard.png';
import done from '../../../../assets/images/sidebar/dashboard.png';

const inspectorMenuItems = [
  { label: '검수 대기', icon: waiting, path: '/inspector/waiting' },
  { label: '검수 완료', icon: done, path: '/inspector/finished' },
];

export default inspectorMenuItems;
