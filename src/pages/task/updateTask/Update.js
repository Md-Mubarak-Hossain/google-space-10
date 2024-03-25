import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const task =useLoaderData();
    console.log(task)
    const {}=task;
    return (
        <div>
            <button>confirm</button>
            <Link to={`/update/${task.id}`} >Edit</Link>
        </div>
    );
};

export default Update;