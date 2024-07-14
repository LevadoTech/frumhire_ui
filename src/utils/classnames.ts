export const classnames = (classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};
