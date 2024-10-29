// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Card } from '@/components/card/card';
// import { classnames } from '@/utils/classnames';

// const tagsStyles = classnames([
//   'mb-[10px] mr-[10px] inline-block rounded-full bg-black px-[10px] py-[4px] text-left text-base text-white'
// ]);

// const projectTitleStyles = classnames([
//   'mb-[10px] text-left text-2xl font-semibold leading-relaxed text-gray-800'
// ]);

// const projectDetailsStyles = classnames([
//   'font-small mb-[10px] text-left text-2xl leading-relaxed text-gray-700'
// ]);

// const datePostedStyles = classnames([
//   'font-small mb-[10px] text-left text-2xl leading-relaxed text-gray-700'
// ]);

// const buttonProjectDetails = classnames(['mb-[10px] inline-block rounded text-3xl text-sky-700']);

// const containerStyles = classnames(['p-6 flex min-h-screen flex-col items-center justify-center']);

// const bidPopupStyles = classnames([
//   'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'
// ]);

// const bidFormStyles = classnames(['p-8 w-1/2 rounded bg-white shadow-md']);

// // Example project structure
// const exampleProject = {
//   projectId: 0,
//   userId: 0,
//   user: {
//     userId: 0,
//     username: 'exampleUser',
//     passwordHash: 'hashedPassword',
//     email: 'client@example.com',
//     fullName: 'Example Client',
//     bio: 'This is a bio.',
//     userType: 'client',
//     createdAt: new Date().toISOString()
//   },
//   title: 'Example Project',
//   description: 'This is a detailed description of the project.',
//   price: 0,
//   createdAt: new Date().toISOString(),
//   projectCategories: [
//     {
//       projectId: 0,
//       categoryId: 1,
//       categoryName: 'Web Development'
//     },
//     {
//       projectId: 0,
//       categoryId: 2,
//       categoryName: 'Graphic Design'
//     }
//   ]
// };

// interface Bid {
//   freelancer: string;
//   hours: string;
//   cost: string;
// }

// const ProjectDetail = () => {
//   const { id: projectId } = useParams();
//   const [userType] = useState('freelancer');
//   const [bids, setBids] = useState<Bid[]>([]);
//   const [showBidPopup, setShowBidPopup] = useState(false);
//   const [bidHours, setBidHours] = useState('');
//   const [bidCost, setBidCost] = useState('');

//   useEffect(() => {
//     if (projectId) {
//       console.log(`Loading project with ID: ${projectId}`);
//       // שליפה של הפרויקט המבוקש
//     }
//   }, [projectId]);

//   const handleBidClick = () => setShowBidPopup(true);

//   const handleBidSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (parseInt(bidHours) <= 0 || parseFloat(bidCost) <= 0) {
//       toast.error('Hours and costs must be positive!');
//       return;
//     }
//     const newBid: Bid = { freelancer: 'freelancer@example.com', hours: bidHours, cost: bidCost };
//     setBids([...bids, newBid]);
//     setShowBidPopup(false);
//     toast.success('Bid submitted successfully!');
//     setBidHours('');
//     setBidCost('');
//   };

//   const handleSelectFreelancer = (freelancer: string) => {
//     toast.success(`Freelancer ${freelancer} selected!`);
//   };

//   return (
//     <div className={containerStyles}>
//       <ToastContainer />
//       <Card
//         key={exampleProject.projectId}
//         title={exampleProject.title}
//         className="mx-auto w-full max-w-[40%] text-left"
//       >
//         <p className={projectTitleStyles}>{exampleProject.description}</p>
//         <p className={projectDetailsStyles}>Project ID: {projectId}</p>
//         <p className={projectDetailsStyles}>
//           Client: {exampleProject.user.fullName} - {exampleProject.user.email}
//         </p>
//         <p className={projectDetailsStyles}>Price: {exampleProject.price}₪</p>
//         <p className={datePostedStyles}>
//           Created At: {new Date(exampleProject.createdAt).toLocaleDateString()}
//         </p>
//         <div className={projectDetailsStyles}>
//           <p className={projectDetailsStyles}>Categories</p>
//           {exampleProject.projectCategories.map(category => (
//             <span key={category.categoryId} className={tagsStyles}>
//               {category.categoryName}
//             </span>
//           ))}
//         </div>
//         {userType === 'freelancer' ? (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold">Freelancer Details</h3>
//             <button
//               className="px-4 py-2 mt-4 w-full rounded bg-black text-white hover:bg-gray-800"
//               onClick={handleBidClick}
//             >
//               Submit Bid
//             </button>

//             {showBidPopup && (
//               <div className={bidPopupStyles}>
//                 <div className={`${bidFormStyles} p-8 w-1/2`}>
//                   <div className="mb-4 flex items-center justify-between">
//                     <h4 className="text-2xl font-semibold">Submit Bid</h4>
//                     <button
//                       onClick={() => setShowBidPopup(false)}
//                       className="text-xl font-bold text-gray-500 hover:text-gray-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                   <form onSubmit={handleBidSubmit} className="space-y-4 text-xl">
//                     <label className="block">
//                       Hours:
//                       <input
//                         type="number"
//                         className="p-2 mt-1 w-full rounded border"
//                         value={bidHours}
//                         onChange={e => setBidHours(e.target.value)}
//                         required
//                       />
//                     </label>
//                     <label className="block">
//                       Cost:
//                       <input
//                         type="number"
//                         className="p-2 mt-1 w-full rounded border"
//                         value={bidCost}
//                         onChange={e => setBidCost(e.target.value)}
//                         required
//                       />
//                     </label>
//                     <button
//                       type="submit"
//                       className="py-2 w-full rounded bg-green-500 text-white hover:bg-green-600"
//                     >
//                       Submit Bid
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold">Client Details</h3>
//             <h4 className="mt-4 text-lg font-medium">Received Bids:</h4>
//             <ul className="mt-2 space-y-4">
//               {bids.length > 0 ? (
//                 bids.map((bid, index) => (
//                   <li key={index} className="p-4 flex items-center justify-between rounded border">
//                     <span>
//                       Freelancer: {bid.freelancer}, Hours: {bid.hours}, Cost: ₪{bid.cost}
//                     </span>
//                     <button
//                       onClick={() => handleSelectFreelancer(bid.freelancer)}
//                       className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
//                     >
//                       Select Freelancer
//                     </button>
//                   </li>
//                 ))
//               ) : (
//                 <p>No bids available for this project.</p>
//               )}
//             </ul>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default ProjectDetail;
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@/components/card/card';
import { classnames } from '@/utils/classnames';

const tagsStyles = classnames([
  'mb-[10px] mr-[10px] inline-block rounded-full bg-black px-[10px] py-[4px] text-left text-base text-white'
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

const buttonProjectDetails = classnames(['mb-[10px] inline-block rounded text-3xl text-sky-700']);

const containerStyles = classnames(['p-6 flex min-h-screen flex-col items-center justify-center']);

const bidPopupStyles = classnames([
  'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'
]);

const bidFormStyles = classnames([
  'p-8 w-[30%] space-y-6 rounded bg-white text-lg shadow-md' //p-6 w-[20%] space-y-6 rounded bg-white shadow-md
]);

// Example project structure
const exampleProject = {
  projectId: 0,
  userId: 0,
  user: {
    userId: 0,
    username: 'exampleUser',
    passwordHash: 'hashedPassword',
    email: 'client@example.com',
    fullName: 'Example Client',
    bio: 'This is a bio.',
    userType: 'client',
    createdAt: new Date().toISOString()
  },
  title: 'Example Project',
  description: 'This is a detailed description of the project.',
  price: 0,
  createdAt: new Date().toISOString(),
  projectCategories: [
    {
      projectId: 0,
      categoryId: 1,
      categoryName: 'Web Development'
    },
    {
      projectId: 0,
      categoryId: 2,
      categoryName: 'Graphic Design'
    }
  ]
};

interface Bid {
  freelancer: string;
  hours: string;
  cost: string;
}

const ProjectDetail = () => {
  const { id: projectId } = useParams();
  const [userType] = useState('freelancer');
  const [bids, setBids] = useState<Bid[]>([]);
  const [showBidPopup, setShowBidPopup] = useState(false);
  const [bidHours, setBidHours] = useState('');
  const [bidCost, setBidCost] = useState('');

  useEffect(() => {
    if (projectId) {
      console.log(`Loading project with ID: ${projectId}`);
    }
  }, [projectId]);

  const handleBidClick = () => setShowBidPopup(true);

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(bidHours) <= 0 || parseFloat(bidCost) <= 0) {
      toast.error('Hours and costs must be positive!');
      return;
    }
    const newBid: Bid = { freelancer: 'freelancer@example.com', hours: bidHours, cost: bidCost };
    setBids([...bids, newBid]);
    setShowBidPopup(false);
    toast.success('Bid submitted successfully!');
    setBidHours('');
    setBidCost('');
  };

  const handleSelectFreelancer = (freelancer: string) => {
    toast.success(`Freelancer ${freelancer} selected!`);
  };

  return (
    <div className={containerStyles}>
      <ToastContainer />
      <Card
        key={exampleProject.projectId}
        title={exampleProject.title}
        className="mx-auto w-full max-w-[40%] text-left"
      >
        <p className={projectTitleStyles}>{exampleProject.description}</p>
        <p className={projectDetailsStyles}>Project ID: {projectId}</p>
        <p className={projectDetailsStyles}>
          Client: {exampleProject.user.fullName} - {exampleProject.user.email}
        </p>
        <p className={projectDetailsStyles}>Price: {exampleProject.price}₪</p>
        <p className={datePostedStyles}>
          Created At: {new Date(exampleProject.createdAt).toLocaleDateString()}
        </p>
        <div className={projectDetailsStyles}>
          <p className={projectDetailsStyles}>Categories</p>
          {exampleProject.projectCategories.map(category => (
            <span key={category.categoryId} className={tagsStyles}>
              {category.categoryName}
            </span>
          ))}
        </div>
        {userType === 'freelancer' ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Freelancer Details</h3>
            <button
              className="px-4 py-2 mt-4 w-full rounded bg-black text-white hover:bg-gray-800"
              onClick={handleBidClick}
            >
              Submit Bid
            </button>

            {showBidPopup && (
              <div className={bidPopupStyles}>
                <div className={`${bidFormStyles} p-8`}>
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-left text-xl font-semibold">Submit Bid</h4>
                    <button
                      onClick={() => setShowBidPopup(false)}
                      className="text-right text-3xl font-bold text-gray-500 hover:text-gray-700"
                    >
                      {/* text-2xl font-bold text-gray-500 hover:text-gray-700 */}×
                    </button>
                  </div>
                  <form onSubmit={handleBidSubmit} className="space-y-4 text-lg">
                    <label className={projectDetailsStyles}>
                      Hours:
                      <input
                        type="number"
                        className="p-2 mt-1 w-full rounded border"
                        value={bidHours}
                        onChange={e => setBidHours(e.target.value)}
                        required
                      />
                    </label>
                    <label className={projectDetailsStyles}>
                      Cost:
                      <input
                        type="number"
                        className="p-2 mt-1 w-full rounded border"
                        value={bidCost}
                        onChange={e => setBidCost(e.target.value)}
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      className="py-2 w-full rounded bg-green-500 text-white hover:bg-green-600"
                    >
                      Submit Bid
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Client Details</h3>
            <h4 className="mt-4 text-lg font-medium">Received Bids:</h4>
            <ul className="mt-2 space-y-4">
              {bids.length > 0 ? (
                bids.map((bid, index) => (
                  <li key={index} className="p-4 flex items-center justify-between rounded border">
                    <span>
                      Freelancer: {bid.freelancer}, Hours: {bid.hours}, Cost: ₪{bid.cost}
                    </span>
                    <button
                      onClick={() => handleSelectFreelancer(bid.freelancer)}
                      className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                    >
                      Select Freelancer
                    </button>
                  </li>
                ))
              ) : (
                <p>No bids available for this project.</p>
              )}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProjectDetail;
