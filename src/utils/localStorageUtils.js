export const loadWaitingProductForm = (id, defaultForm) => {
  const saved = localStorage.getItem(`waitingProductForm_${id}`);
  if (saved) {
    try {
      return JSON.parse(saved).form;
    } catch {
      // 파싱 실패 시 기본값 반환
    }
  }
  return defaultForm;
};
