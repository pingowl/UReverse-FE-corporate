let navigator;

export const setNavigator = (navFn) => {
  navigator = navFn;
};

export const goTo = (path) => {
  if (navigator) navigator(path);
};
