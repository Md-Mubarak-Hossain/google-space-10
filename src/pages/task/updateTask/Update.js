import React, { useContext, useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../router/Loading';
import { AuthContext } from '../../../context/Context';

const Update = () => {
    const taskData=useLoaderData();
    const{user,loading}=useContext(AuthContext)
    console.log(taskData);
//   const [data, setData] = useState(taskData)
//   const [taskData, setNav] = useState(taskData)
//   useEffect(() => {
//     fetch(`https://projects-drive-file.vercel.app/mytask/${taskData?._id}`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         setNav(result)
//       })
//   }, [])
  const [descriptionOpen, setDescription] = useState('block');
  const [TechnologyOpen, setTechnology] = useState('hidden');
  const [previewOpen, setPreview] = useState('hidden');
  const [featuresOpen, setFeatures] = useState('hidden');
//   const [ID, setID] = useState(1);
//   const moveProject = async (m) => {
//     setID(m)
//   }
  const descriptionPage = async (m) => {
    setDescription(m);
    setFeatures("hidden");
    setPreview("hidden");
    setTechnology("hidden");

  };
  console.log("description call:" + descriptionOpen);
  const technologyPage = async (m) => {
    setTechnology(m);
    setDescription("hidden");
    setFeatures("hidden");
    setPreview("hidden")
  };
  console.log("Technology call:" + descriptionOpen);
  const previewPage = async (m) => {
    setPreview(m);
    setTechnology("hidden");
    setDescription("hidden");
    setFeatures("hidden");
  };
  console.log("Preview call:" + descriptionOpen);
  const featurePage = async (m) => {
    setFeatures(m);
    setPreview("hidden");
    setDescription("hidden");
    setTechnology("hidden")
  };
  console.log("Features call:" + descriptionOpen);
  return (
    <>
    {loading?<Loading></Loading>:
     <div className='relative pt-5'>
      <span className='px-8 flex flex-row flex-wrap justify-end items-center fixed top-20 right-0 z-10'>
      </span>
      <div>
        
          <span>
            <section className="swap  lg:pt-0 overflow-hidden">
              <div className="container px-8  pb-16 mx-auto">
                <div className="lg:w-9/10 mx-auto flex flex-wrap">
                  <div className="lg:w-1/2 w-full lg:pr-10 lg:py-2 mb-2  lg:mb-0">
                    <h2 className="text-sm title-font  tracking-widest uppercase">Projects name</h2>
                    <h1 className=" text-xl title-font  uppercase">{taskData?.id}.{taskData?.title}</h1>
                    <div className="flex mb-2">
                      <Link onClick={() => descriptionPage(`block`)} className=" flex-grow text-primary border-0 rounded-none border-b-2 hover:border-blue-200 focus:border-blue-100 hover:bg-base-300 focus:bg-base-300  border-indigo-800 py-2 text-lg px-1 text-center">Description</Link>
                      <Link onClick={() => featurePage(`block`)} className="flex-grow text-primary border-0 rounded-none border-b-2 hover:border-blue-200 focus:border-blue-100 hover:bg-base-300 focus:bg-base-300  border-indigo-800 py-2 text-lg px-1 text-center">Features</Link>
                      <Link onClick={() => technologyPage(`block`)} className="flex-grow text-primary border-0 rounded-none border-b-2 hover:border-blue-200 focus:border-blue-100 hover:bg-base-300 focus:bg-base-300  border-indigo-800 py-2 text-lg px-1 text-center">Technologies</Link>
                      <Link onClick={() => previewPage(`block`)} className="flex-grow text-primary border-0 rounded-none border-b-2 hover:border-blue-200 focus:border-blue-100 hover:bg-base-300 focus:bg-base-300  border-indigo-800 py-2 text-lg px-1 text-center">Preview</Link>
                    </div>
                    <div className={`${previewOpen} lg:h-5/6`}>
                      <iframe src={taskData?.liveSite} frameborder="0" className='w-full h-full pt-2' title={taskData?.title}>
                      </iframe>
                    </div>
                    <p className={`leading-relaxed mb-4 text-justify 
                ${descriptionOpen}`}>
                      {/* content */}
                      {taskData?.description}
                    </p>

                    <div className={`${featuresOpen}`}>
                      <span className="pt-5">Features</span>
                      <div className="flex border-t border-gray-200 py-2 pr-5">
                        <span className="">Color</span>
                        <span className="ml-auto ">Dark mix</span>
                      </div>
                      <div className='flex flex-col'>
                        {taskData?.features.map(f => <p>{f.f}</p>)}
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="">Responsive</span>
                        <h2>{taskData?.responsive}</h2>
                      </div>
                    </div>
                    <div className={`flex flex-col border-t border-b mb-6 border-gray-200 py-2 ${TechnologyOpen}`}>
                      <span className="pt-5">Technology</span>
                      <p>{taskData?.technology}</p>

                      <span className="pt-5">Repository
                        <span className='flex flex-row justify-between mr-5'>
                          <ExternalLink href={taskData?.liveSite}>Live Site</ExternalLink>
                          <ExternalLink href={taskData?.clientSite}>Client Site</ExternalLink>
                          <ExternalLink href={taskData?.serverSite}>Server Site</ExternalLink>
                        </span>
                      </span>
                    </div>
                  </div>
                  <img alt="projects" className="lg:w-1/2 lg:mt-7 pt-16 block w-full lg:h-2/3 h-64 object-cover object-center rounded" src={taskData?.thumb} />
                </div>
              </div>
            </section>
            {/* project images features */}
            <section>
              <div>
                <h1 className='mx-4 bg-base-200 py-8 text-2xl text-center'>Here is <span className='text-blue-500'>{taskData?.title}</span> projects overview's some snapshot</h1>
              </div>
            </section>
            <section className="">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {taskData?.miniThumb.map(t => <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link className="block relative h-48 rounded overflow-hidden">
                      <img alt="projects" className="object-cover object-center w-full h-full block" src={t.subThumb} />
                    </Link>
                  </div>)}
                </div>
              </div>
            </section>
            <div className='mx-auto w-full flex flex-col justify-center items-center'>
              
            </div>
          </span>         
      </div>
    </div>}
    </>
  );
};

export default Update;