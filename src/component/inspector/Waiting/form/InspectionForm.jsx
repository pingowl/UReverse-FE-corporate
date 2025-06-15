import React from 'react';
import DefectToggleGroup from './DefectToggleGroup';
import GradeSelector from './GradeSelector';
import ExpectedPointDisplay from './ExpectedPointDisplay';
import styles from './InspectionForm.module.css';
import Button from '../../../common/Button/Button';

const InspectionForm = ({
  form,
  onChange,
  onSubmit,
  product,
  selectedColor,
  selectedRate,
  discountedPoint,
  navigate,
}) => {
  return (
    <form className={styles['form-section']} onSubmit={onSubmit}>
      <div className={styles['form-label']}>하자 여부</div>
      <DefectToggleGroup form={form} onChange={onChange} />

      <label className={styles['form-label']}>검수 코멘트</label>
      <textarea
        className={styles['form-textarea']}
        name="notes"
        value={form.notes}
        onChange={onChange}
        placeholder="검수 시 발견한 특징, 하자, 참고사항 등을 입력해 주세요."
      />

      <div className={styles['form-label']}>지급 포인트</div>
      <ExpectedPointDisplay
        discountedPoint={discountedPoint}
        selectedColor={selectedColor}
        selectedRate={selectedRate}
      />

      <div className={styles['form-label']}>등급</div>
      <GradeSelector form={form} onChange={onChange} />

      <div className={styles['result-indicator']}>
        최종 결과{' '}
        <span
          className={`${styles['result-text']} ${
            form.grade === 'F' ? styles['fail'] : styles['pass']
          }`}
        >
          {form.grade === '' ? '-' : form.grade === 'F' ? 'FAIL' : 'PASS'}
        </span>
      </div>

      <div className={styles.buttonRow}>
        <Button text="등록" type="submit" color="yellow" />
        <Button
          text="뒤로"
          type="button"
          onClick={() => navigate(-1)}
          color="white"
        />
      </div>
    </form>
  );
};

export default InspectionForm;
