'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@/components/card/card';
import { classnames } from '@/utils/classnames';
import createApiClient from '@/utils/apiClient';
import { Button } from '@/components/button/button';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components/input/input-field';
import { Icon } from '@/components/icon/icon';

const tagsStyles = classnames([
  'mb-[10px] mr-[10px] inline-block rounded-full bg-black px-[10px] py-[4px] text-left text-lg text-white'
]);

const projectTitleStyles = classnames([
  'mb-[10px] text-left text-2xl font-semibold leading-relaxed text-gray-800'
]);

const projectDetailsStyles = classnames([
  'font-small mb-[10px] text-left text-2xl leading-relaxed text-gray-700'
]);

const datePostedStyles = classnames([
  'font-small mb-[10px] text-left text-2xl leading-relaxed text-gray-700'
]);

const containerStyles = classnames([
  'p-6 mt-20 flex min-h-screen flex-col items-center justify-start'
]);

const bidPopupStyles = classnames([
  'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'
]);

const bidFormStyles = classnames(['p-8 w-[30%] space-y-6 rounded bg-white text-lg shadow-md']);

const formStyles = classnames([
  'flex w-[100%] flex-col items-center justify-between gap-[40px] text-right'
]);

interface Bid {
  freelancer: string;
  hours: string;
  cost: string;
}

interface Project {
  projectId: number;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  user: {
    fullName: string;
    email: string;
  };
  projectCategories: Array<{ categoryId: number; categoryName: string }>;
}

const apiClient = createApiClient('https://frumhire-e18655fb99f3.herokuapp.com/api/');

const fetchProject = async (projectId: string) => {
  const response = await apiClient.get(`Projects/${projectId}`);
  return response.data;
};

const ProjectDetail = () => {
  const { id: projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [userType] = useState('freelancer');
  const [bids, setBids] = useState<Bid[]>([
    {
      freelancer: 'freelancer@example.com',
      hours: '2',
      cost: '100'
    },
    {
      freelancer: 'freelancer@example.com',
      hours: '2',
      cost: '100'
    }
  ]);
  const [showBidPopup, setShowBidPopup] = useState(false);

  const form = useForm({
    defaultValues: {
      hours: '',
      cost: ''
    }
  });

  useEffect(() => {
    if (projectId) {
      const id = Array.isArray(projectId) ? projectId[0] : projectId;
      fetchProject(id)
        .then(data => setProject(data))
        .catch(() => toast.error('Failed to load project details'));
    }
  }, [projectId]);

  const handleBidClick = () => setShowBidPopup(true);

  const handleBidSubmit = (vals: any) => {
    if (parseInt(vals.hours) <= 0 || parseFloat(vals.cost) <= 0) {
      toast.error('השעות והמחיר חייבים להיות חיוביים');
      return;
    }

    const newBid: Bid = {
      freelancer: 'freelancer@example.com',
      hours: vals.hours,
      cost: vals.cost
    };

    setBids([...bids, newBid]);
    setShowBidPopup(false);
    toast.success('!ההצעה נשלחה בהצלחה');
    form.reset();
  };

  const handleClosePopup = () => {
    setShowBidPopup(false);
  };

  const handleSelectFreelancer = (freelancer: string) => {
    toast.success(`Freelancer ${freelancer} selected!`);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={containerStyles}>
      <ToastContainer />
      {project ? (
        <Card
          key={project.projectId}
          title={project.title}
          className="mx-auto w-full max-w-[40%] text-left"
        >
          <p className={projectTitleStyles}>{project.description}</p>
          <p className={projectDetailsStyles}>Project ID: {project.projectId}</p>
          <p className={projectDetailsStyles}>
            Client: {project.user.fullName} -{' '}
            <a
              href={`mailto:${project.user.email}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              {project.user.email}
            </a>
          </p>

          <p className={projectDetailsStyles}>Price: {project.price}₪</p>
          <p className={datePostedStyles}>
            Created At: {new Date(project.createdAt).toLocaleDateString()}
          </p>
          <div className={projectDetailsStyles}>
            <p className={projectDetailsStyles}>Categories</p>
            {project.projectCategories.map(category => (
              <span key={category.categoryId} className={tagsStyles}>
                {category.categoryName}
              </span>
            ))}
          </div>
          {userType === 'freelancer' ? (
            <div className="mt-6">
              <Button onClick={handleBidClick} size="small">
                Submit Bid
              </Button>

              {showBidPopup && (
                <div className={bidPopupStyles}>
                  <div className={`${bidFormStyles} p-8 relative`}>
                    <Button className="p-0 absolute left-2 top-2" onClick={handleClosePopup} clear>
                      <Icon name="close" color="red" size={30} />
                    </Button>
                    <form
                      className={formStyles}
                      onSubmit={form.handleSubmit((vals: any) => {
                        console.log(vals);
                        handleBidSubmit(vals);
                      })}
                    >
                      <Card title="טופס הצעה">
                        <InputField
                          id="hours"
                          label="שעות"
                          form={form}
                          rules={{ required: val => !!val || 'שדה חובה' }}
                        />
                        <InputField
                          id="cost"
                          label="מחיר "
                          form={form}
                          rules={{ required: val => !!val || 'שדה חובה' }}
                        />
                        <Button
                          type="submit"
                          className="py-2 w-full rounded bg-green-500 text-white hover:bg-green-600"
                        >
                          שליחת ההצעה
                        </Button>
                      </Card>
                    </form>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6">
              <h4 className="mt-4 text-lg font-medium">:Received Bids</h4>
              <ul className="mt-2 space-y-4">
                {bids.length > 0 ? (
                  bids.map((bid, index) => (
                    <li
                      key={index}
                      className={`p-4 relative flex cursor-pointer items-center justify-between rounded border ${
                        hoveredIndex === index ? 'bg-gray-100' : ''
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleSelectFreelancer(bid.freelancer)}
                    >
                      <span className={projectDetailsStyles}>
                        Freelancer: {bid.freelancer}, Hours: {bid.hours}, Cost: {bid.cost}₪
                      </span>
                      {hoveredIndex === index && (
                        <Icon name="check_circle" color="green" size={25} />
                      )}
                    </li>
                  ))
                ) : (
                  <p>No bids available for this project.</p>
                )}
              </ul>
            </div>
          )}
        </Card>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default ProjectDetail;
