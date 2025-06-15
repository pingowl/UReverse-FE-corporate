import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductInfoSection from '../common/ProductInfoSection';
import SectionHeader from '../../common/Header/SectionHeader';
import styles from './ProductWaitingDetailBox.module.css';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import {
  fetchPendingProductDetail,
  submitProductInspection,
} from '../../../api/products';
import { loadWaitingProductForm } from '../../../utils/localStorageUtils';

const WaitingProductDetailBox = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const defaultForm = {
    result: '',
    notes: '',
    isTorn: 'N',
    hasStain: 'N',
    hasFading: 'N',
    isStretched: 'N',
    otherDefect: 'N',
    grade: '',
  };

  const [form, setForm] = useState(() =>
    loadWaitingProductForm(id, defaultForm)
  );
  const [loading, setLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const navigate = useNavigate();

  // 지급 포인트 계산
  const gradeRates = { S: 1, A: 0.7, B: 0.5, C: 0.3, F: 0 };
  const gradeColors = {
    S: '#27ae60',
    A: '#f39c12',
    B: '#2980b9',
    C: '#d35400',
    F: '#c0392b',
  };
  const selectedRate = gradeRates[form.grade] ?? 1;
  const selectedColor = gradeColors[form.grade] ?? '#222';

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetchPendingProductDetail(id);
        if (res.success) setProduct(res.response);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const saved = localStorage.getItem(`waitingProductForm_${id}`);
    if (saved) {
      try {
        setForm(JSON.parse(saved).form);
      } catch {
        setForm(defaultForm);
      }
    } else {
      setForm(defaultForm);
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    // form 값이 바뀔 때마다 임시 저장
    if (form) {
      const now = new Date();
      localStorage.setItem(
        `waitingProductForm_${id}`,
        JSON.stringify({ form, savedAt: now.toISOString() })
      );
      setLastSaved(now.toISOString());
    }
  }, [form, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 등급이 바뀌면 result도 자동 변경
    if (name === 'grade') {
      setForm((f) => ({
        ...f,
        [name]: value,
        result: value === 'F' ? 'FAIL' : 'PASS',
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수값 검사
    const requiredFields = [
      'grade',
      'isTorn',
      'hasStain',
      'hasFading',
      'isStretched',
      'otherDefect',
    ];

    const missingFields = requiredFields.filter((field) => !form[field]);

    if (!form.grade) {
      alert('등급을 선택해 주세요.');
      return;
    }

    if (missingFields.length > 0) {
      alert('하자 여부를 모두 선택해 주세요.');
      return;
    }

    try {
      await submitProductInspection({
        productId: product.productId,
        ...form,
      });
      alert('검수 결과가 등록되었습니다!');
      navigate('/inspector/waiting');
    } catch {
      alert('검수 등록 실패');
    }
  };

  if (loading) return <div>로딩중...</div>;
  if (!product) return <div>상품 정보를 불러올 수 없습니다.</div>;

  const discountedPoint = Math.round(product.expectedPoint * selectedRate);

  return (
    <div className={styles['detail-container']}>
      <SectionHeader title="검수 대기 상품 상세">
        <span className={styles['detail-save-time']}>
          <span
            role="img"
            aria-label="저장됨"
            style={{ marginRight: 4, color: 'gray' }}
          >
            <IoCheckmarkDoneSharp />
          </span>
          마지막 저장&nbsp;
          <b>
            {lastSaved
              ? new Date(lastSaved).toLocaleString()
              : product.aiInspection?.createdAt}
          </b>
        </span>
      </SectionHeader>

      <ProductInfoSection product={product} setModalImg={setModalImg} />

      {/* 검수 입력 폼 */}
      <form className={styles['form-section']} onSubmit={handleSubmit}>
        {/* 하자 여부 체크 */}
        <div className={styles['form-label']}>하자 여부</div>
        <div className={styles['defect-grid']}>
          {[
            { key: 'hasStain', label: '얼룩' },
            { key: 'isTorn', label: '찢김' },
            { key: 'hasFading', label: '변색' },
            { key: 'isStretched', label: '늘어남' },
            { key: 'otherDefect', label: '기타 하자' },
          ].map((item) => (
            <div key={item.key} className={styles['defect-item']}>
              <span>{item.label}</span>
              <div className={styles['defect-toggle']}>
                {['Y', 'N'].map((val) => (
                  <React.Fragment key={val}>
                    <input
                      type="radio"
                      id={`${item.key}_${val}`}
                      name={item.key}
                      value={val}
                      checked={form[item.key] === val}
                      onChange={handleChange}
                    />
                    <label htmlFor={`${item.key}_${val}`}>
                      {val === 'Y' ? '있음' : '없음'}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 코멘트 */}
        <label className={styles['form-label']}>검수 코멘트</label>
        <textarea
          className={styles['form-textarea']}
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="검수 시 발견한 특징, 하자, 참고사항 등을 입력해 주세요."
        />

        {/* 지급 포인트 */}
        <div className={styles['form-label']}>지급 포인트</div>
        <div className={styles['form-row']}>
          <span>H.point</span>
          <input
            className={styles['form-input']}
            name="expectedPoint"
            value={discountedPoint.toLocaleString()}
            readOnly
            style={{ fontWeight: 700, color: selectedColor, width: 100 }}
          />
          <span
            className={styles['point-rate']}
            style={{ color: selectedColor, marginLeft: 8, fontWeight: 600 }}
          >
            ({Math.round(selectedRate * 100)}%)
          </span>
        </div>

        {/* 등급 선택 라디오 */}
        <div className={styles['form-label']}>등급</div>
        <div className={styles['grade-row']}>
          {['S', 'A', 'B', 'C', 'F'].map((grade) => (
            <label
              key={grade}
              className={`${styles['grade-label']} ${
                form.grade === grade ? styles['grade-selected'] : ''
              }`}
            >
              <input
                type="radio"
                name="grade"
                value={grade}
                checked={form.grade === grade}
                onChange={handleChange}
                className={styles['grade-radio']}
              />
              {grade}
            </label>
          ))}
        </div>

        {/* 최종 결과 */}
        <div className={styles['result-indicator']}>
          최종 결과{' '}
          <span
            className={`${styles['result-text']} ${
              form.grade === 'F'
                ? styles['fail']
                : form.grade
                ? styles['pass']
                : ''
            }`}
          >
            {form.grade === '' ? '-' : form.grade === 'F' ? 'FAIL' : 'PASS'}
          </span>
        </div>

        {/* 제출 버튼 */}
        <div className={styles['button-row']}>
          <button type="submit" className={styles['submit-btn']}>
            등록
          </button>
          <button
            type="button"
            className={styles['back-btn']}
            onClick={() => navigate(-1)}
          >
            뒤로
          </button>
        </div>
      </form>

      {/* 이미지 팝업 */}
      {modalImg && (
        <div
          className={styles['modal-backdrop']}
          onClick={() => setModalImg(null)}
        >
          <div
            className={styles['modal-img-box']}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImg} alt="확대이미지" />
            <button
              className={styles['modal-close']}
              onClick={() => setModalImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingProductDetailBox;
