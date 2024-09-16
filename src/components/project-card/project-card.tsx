import { ReactNode } from 'react';
import { classnames } from '@/utils/classnames';

export interface ProjectCardProps {
  children?: ReactNode;
  picture?: ReactNode | string;
  title?: ReactNode;
  details?: ReactNode;
  className?: string;
}

export const ProjectCard = ({ children, picture, title, details, className }: ProjectCardProps) => {
  const cardClasses = classnames([
    'w-[20%]', 
    'bg-white',
    'shadow-[0_0_13px_0_rgba(82,63,105,0.05)]', // Box shadow for a subtle effect
    'p-[2px]', // Padding inside the card
    'border-2',
    className // Custom className passed as a prop
  ]);

  const titleClasses = classnames([
    'text-[1.5rem]', // Title font size
    'font-bold', // Bold font for the title
    'mb-[10px]', // Margin-bottom for spacing
    'text-primary' // Custom primary text color
  ]);

  const detailsClasses = classnames([
    'text-[1rem]', // Details font size
    'text-gray-700', // Gray text color for details
    'mb-[10px]' // Margin-bottom for spacing
  ]);
  return (
    <div className={cardClasses}>
      {typeof picture === 'string' ? (
        <img
          src={picture}
          alt="Project"
          className="mb-[15px] h-[150px] w-full object-cover"
        />
      ) : (
        picture && <div className="mb-[15px]">{picture}</div>
      )}

      {title && <h3 className={titleClasses}>{title}</h3>}

      {details && <p className={detailsClasses}>{details}</p>}

      <div>{children}</div>
    </div>
  );
};
