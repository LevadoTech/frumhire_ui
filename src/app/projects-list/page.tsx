'use client';
import { Card } from '@/components/card/card';
import { classnames } from '@/utils/classnames';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      datePosted: '1.8.2024',
      details: 'A React and Next.js based dashboard for managing financial data',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg',
      tags: ['React', 'Next.js', 'Fintech']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      datePosted: '25.7.2024',
      details: 'A scalable e-commerce platform built with Node.js and MongoDB',
      picture: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'MongoDB', 'E-commerce']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      datePosted: '15.6.2024',
      details: 'A personal portfolio website to showcase projects and blogs',
      picture: 'https://via.placeholder.com/150',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Fintech Dashboard',
      datePosted: '1.8.2024',
      details: 'A React and Next.js based dashboard for managing financial data',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg',
      tags: ['React', 'Next.js', 'Fintech']
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      datePosted: '25.7.2024',
      details: 'A scalable e-commerce platform built with Node.js and MongoDB',
      picture: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'MongoDB', 'E-commerce']
    },
    {
      id: 1,
      title: 'Portfolio Website',
      datePosted: '15.6.2024',
      details: 'A personal portfolio website to showcase projects and blogs',
      picture: 'https://via.placeholder.com/150',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 1,
      title: 'Fintech Dashboard',
      datePosted: '1.8.2024',
      details: 'A React and Next.js based dashboard for managing financial data',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg',
      tags: ['React', 'Next.js', 'Fintech']
    },
    {
      id: 1,
      title: 'E-commerce Platform',
      datePosted: '25.7.2024',
      details: 'A scalable e-commerce platform built with Node.js and MongoDB',
      picture: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'MongoDB', 'E-commerce']
    },
    {
      id: 1,
      title: 'Portfolio Website',
      datePosted: '15.6.2024',
      details: 'A personal portfolio website to showcase projects and blogs',
      picture: 'https://via.placeholder.com/150',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 1,
      title: 'Fintech Dashboard',
      datePosted: '1.8.2024',
      details: 'A React and Next.js based dashboard for managing financial data',
      picture: 'https://www.misspetel.com/wp-content/uploads/2019/08/DSC_9336.jpg',
      tags: ['React', 'Next.js', 'Fintech']
    },
    {
      id: 1,
      title: 'E-commerce Platform',
      datePosted: '25.7.2024',
      details: 'A scalable e-commerce platform built with Node.js and MongoDB',
      picture: 'https://via.placeholder.com/150',
      tags: ['Node.js', 'MongoDB', 'E-commerce']
    },
    {
      id: 1,
      title: 'Portfolio Website',
      datePosted: '15.6.2024',
      details: 'A personal portfolio website to showcase projects and blogs',
      picture: 'https://via.placeholder.com/150',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  const handleViewDetails = () => {};

  const containerStyles = classnames([
    'grid',
    'grid-cols-1',
    'gap-x-[30px]',
    'gap-y-[30px]',
    'p-2',
    'm-[80px]'
  ]);

  const tagsStyles = classnames([
    'mb-[10px] mr-[10px] inline-block rounded-full bg-sky-500 px-[10px] py-[8px] text-left text-2xl text-white'
  ]);

  const projectDetailsStyles = classnames([
    'mb-[10px] text-left text-5xl text-base font-medium leading-relaxed text-gray-800'
  ]);

  const datePostedStyles = classnames([
    'font-small mb-[10px] text-left text-2xl text-base leading-relaxed text-gray-700'
  ]);

  const buttonProjectDetails = classnames(['mb-[10px] inline-block rounded text-3xl text-sky-700']);

  const buttonProjectOffer = classnames([
    'mb-[10px] inline-block rounded bg-sky-600 px-[15px] py-[8px] text-3xl text-white'
  ]);

  return (
    <div className={containerStyles}>
      {projects.map((project, index) => (
        <Card key={index} title={project.title} className="m-[5px] text-left">
          {' '}
          <h2 className={projectDetailsStyles}>{project.details}</h2>
          <div>
            {project.tags.map((tag, i) => (
              <span key={i} className={tagsStyles}>
                {tag}
              </span>
            ))}
          </div>
          <p className={datePostedStyles}>Posted on: {project.datePosted}</p>
          <div className="flex items-center justify-between">
            <button className={buttonProjectOffer} onClick={() => handleViewDetails()}>
              {'<'} Submit a proposal for the project
            </button>
            <button className={buttonProjectDetails} onClick={() => handleViewDetails()}>
              View Details
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Projects;
