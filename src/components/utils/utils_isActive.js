export const styleActiveLink = (isActive, s) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};
