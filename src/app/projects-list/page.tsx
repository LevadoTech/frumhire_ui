'use client';
import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import { classnames } from '@/utils/classnames';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const containerStyles = classnames([
  'grid',
  'grid-cols-1',
  'gap-x-[30px]',
  'gap-y-[30px]',
  'p-2',
  'm-[80px]'
]);

const tagsStyles = classnames([
  'mb-[10px] mr-[10px] inline-block rounded-full bg-black px-[10px] py-[8px] text-left text-2xl text-white'
]);

const projectDetailsStyles = classnames([
  'mb-[10px] text-left text-4xl text-base font-medium leading-relaxed text-gray-800'
]);

const datePostedStyles = classnames([
  'font-small mb-[10px] text-left text-3xl text-base leading-relaxed text-gray-700'
]);

const buttonProjectDetails = classnames(['mb-[10px] inline-block rounded text-3xl text-sky-700']);

interface ProjectCategory {
  projectId: number;
  categoryId: number;
  categoryName: string;
}

interface User {
  userId: number;
  username: string;
  passwordHash: string;
  email: string;
  fullName: string;
  bio: string | null;
  userType: string;
  createdAt: string;
}

interface Project {
  projectId: number;
  userId: number;
  user: User;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  projectCategories: ProjectCategory[];
}

const fetchProjects = async () => {
  const response = await axios.get('https://frumhire-e18655fb99f3.herokuapp.com/api/Projects', {
    headers: {
      ApiKey: 'e023f93b-86c8-4e33-8fe7-cb6559645a8e'
    }
  });
  return response.data;
};

const Projects = () => {
  // useQuery to fetch projects
  const {
    data: projects = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['projects'], // Query key
    queryFn: fetchProjects // API call function
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading projects.</div>;

  const handleViewDetails = (projectId: number) => {
    console.log(`Viewing details for project ID: ${projectId}`);
  };

  return (
    <div className={containerStyles}>
      {projects.map((project: Project) => (
        <Card key={project.projectId} title={project.title} className="text-left">
          {' '}
          <p className={projectDetailsStyles}>{project.description}</p>
          <div>
            {project.projectCategories.map((category, i) => (
              <span key={i} className={tagsStyles}>
                {category.categoryName}
              </span>
            ))}
          </div>
          <p className={datePostedStyles}>
            Posted on: {new Date(project.createdAt).toLocaleDateString()}
          </p>
          <div className="flex items-center justify-between">
            <Button size="small">{'<'} Submit Proposal</Button>
            <button
              className={buttonProjectDetails}
              onClick={() => handleViewDetails(project.projectId)}
            >
              View Details
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Projects;
