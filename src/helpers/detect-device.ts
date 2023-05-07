export const windowIsDefined = () => {
  try {
    return typeof window !== 'undefined';
  } catch (e) {
    return false;
  }
};

export const getDevice = (): 'mobile' | 'pc' => {
  return windowIsDefined() &&
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator?.userAgent)
    ? 'mobile'
    : 'pc';
};
