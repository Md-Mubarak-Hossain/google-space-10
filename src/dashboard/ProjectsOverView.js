import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectsOverView = () => {
   const tasks=useLoaderData();
   console.log(tasks);
    return (
        <>
          <div className="overflow-x-auto h-screen">
  <table className="rounded-none">
    {/* head */}
    <thead>
      <tr className='border-b border-green-900 text-lg'>
        <th className='p-1'>No</th>
        <th className='p-1'>Projects</th>
        <th className='p-1'>Thumb</th>
        <th className='p-1'>live site</th>
        <th className='p-1'>Client site</th>
        <th className='p-1'>Server site</th>
        <th className='p-1'>Technology</th>
        <th className='p-1'>Utility</th>
      </tr>
    </thead>
   <tbody>
   {
    tasks.map(t=><tr className='border-t border-green-900'>
        <td className='p-1'>{t.id}</td>
        <td className='p-1'>{t.title.slice(0,12)}</td>
        <td className='p-1'><img src={t.thumb} alt="thumb" className='w-20 h-16'/></td>
        <td className='p-1'>{t.liveSite}</td>
        <td className='p-1'>{t.clientSite}</td>
        <td className='p-1'>{t.serverSite}</td>
        <td className='p-1'>{t.technology}</td>
        <td className='flex flex-col justify-center items-center'>
        <td className='p-1'><Link className="text-blue-300">Details</Link></td>
        <td className='p-1'><Link className="text-orange-300">Edit</Link></td>
        <td className='p-1'><Link className="text-red-500">Delete</Link></td>
        </td>        
      </tr>)
   }
   </tbody>
  </table>
</div>  
        </>
    );
};

export default ProjectsOverView;