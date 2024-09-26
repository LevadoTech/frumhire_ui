'use client';
import { ProjectCard } from '@/components/project-card/project-card';
import { classnames } from '@/utils/classnames';

const Projects = () => {
  const projects = [
    {
      title: 'card',
      details: 'bla bla bla',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_1080_850.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://www.hersheyland.ca/content/dam/hersheyland_canada/en_ca/recipe-logos/recipe-images/original-chipits-cookies-recipe.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://www.southernliving.com/thmb/1nXApw4eCu0_IjJInCt3sDrVhSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Monster_Cookies_010-2996b6446e834ad1b093ef08b6828160.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_1080_850.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://www.hersheyland.ca/content/dam/hersheyland_canada/en_ca/recipe-logos/recipe-images/original-chipits-cookies-recipe.jpg'
    },
    {
      title: 'card',
      details: 'bla bla bla',
      picture:
        'https://www.southernliving.com/thmb/1nXApw4eCu0_IjJInCt3sDrVhSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Monster_Cookies_010-2996b6446e834ad1b093ef08b6828160.jpg'
    }
  ];

  const containerStyles = classnames([
    'grid',
    'grid-cols-4', //4 cards in a row
    'gap-x-4',
    'gap-y-[30px]',
    'p-2',
    'm-[80px]'
  ]);

  return (
    <div className={containerStyles}>
      {projects.map(project => (
        <ProjectCard
          key={project.title}
          picture={project.picture}
          title={project.title}
          details={project.details}
        />
      ))}
    </div>
  );
};
export default Projects;
