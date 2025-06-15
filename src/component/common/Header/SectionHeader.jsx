import { useLocation } from 'react-router-dom';
import styles from './SectionHeader.module.css';
import clsx from 'clsx';

const SectionHeader = ({ title, children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isInspector = location.pathname.startsWith('/inspector');

  return (
    <div
      className={clsx(
        styles.header,
        isAdmin && styles.admin,
        isInspector && styles.inspector
      )}
    >
      <div className={styles.leftHeader}>
        <div
          className={clsx(
            styles.tag,
            isAdmin && styles.adminTag,
            isInspector && styles.inspectorTag
          )}
        />
        <h2 className={styles.titleTop}>{title}</h2>
      </div>
      <div style={{ flex: 1, minWidth: 160, maxWidth: 400 }}>{children}</div>
    </div>
  );
};

export default SectionHeader;
