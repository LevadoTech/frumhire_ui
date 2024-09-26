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
    'w-full',
    'h-[250px]',
    'w-[280px]',
    'bg-white',
    'shadow-[0_0_13px_0_rgba(82,63,105,0.05)]',
    'p-[1px]',
    'border-2',
    'flex',
    'flex-col',
    'justify-between',
    className
  ]);

  const titleClasses = classnames(['text-[1.5rem]', 'mb-[10px]', 'text-primary']);

  const detailsClasses = classnames(['text-[1rem]', 'text-gray-700', 'mb-[10px]']);

  const imageStyles = classnames(['w-[150px]', 'h-[150px]', 'object-cover']);

  return (
    <div className={cardClasses}>
      {typeof picture === 'string' ? (
        <img src={picture} alt="Project" className="mb-[15px] h-[150px] w-full object-cover" />
      ) : (
        picture && <div className={imageStyles}>{picture}</div>
      )}

      {title && <h3 className={titleClasses}>{title}</h3>}

      {details && <p className={detailsClasses}>{details}</p>}

      <div>{children}</div>
    </div>
  );
};
