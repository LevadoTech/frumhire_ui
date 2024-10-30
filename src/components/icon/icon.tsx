export const Icon = ({ name, color, size }: { name?: string; color?: string; size?: number }) => {
  return (
    <span
      style={{ color, fontSize: `${size || 24}px`, maxWidth: `${size || 24}px` }}
      className={`material-symbols-outlined ${name} text-[24px}] text-primary`}
    >
      {name}
    </span>
  );
};

export default Icon;
