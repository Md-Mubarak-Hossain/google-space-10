import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import useTitle from '../../Hooks/useTitle';


const ReviewUpdate = () => {
    useTitle('Update task');
    const review = useLoaderData();
    console.log(review)
    const { loading, user } = useContext(AuthContext)
    const [reviewer, setReviewer] = useState(review)

    const handleSub = event => {
        event.preventDefault();
        fetch(`https://server-space.vercel.app/mytask/${reviewer._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })

            .then(res => res.json())
            .then(data => {

                if (data.modified > 0) {
                    alert('successfully updated!!!');
                    event.target.reset();
                }


            })
    }
    const onChangeHandle = event => {
        const value = event.target.value;
        const field = event.target.field;
        const newReview = { ...reviewer }
        newReview[field] = value;
        setReviewer(newReview);
    }
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-xl lg:text-2xl font-extrabold text-primary text-center'>Update Form</h2>
            <h2 className='text-xl lg:text-3xl font-extrabold text-warning text-center'>The Details Of this service : <span className='text-primary'> {review.serviceName}</span> </h2>
            <div className="card lg:card-side  shadow-xl grid grid-cols-1 lg:grid-cols-2">
                <div className="card-body w-11/12 mx-auto lg:w-full  bg-red-300 text-blue-900 rounded">
                    <h2>Your Previous  Information</h2>
                    <h2>Reviewer Name:{review.name}</h2>
                    <h2>Email:{review.email}</h2>
                    <h2>description:{review.description}</h2>
                    <img src={review.image} alt="" />
                </div>
                <form form onSubmit={handleSub} className="card-body w-11/12 mx-auto lg:w-full  bg-blue-900 rounded">
                    <h2>Your Update field</h2>
                    <input onChange={onChangeHandle} type="text" name="name" placeholder=" first name" className="input input-bordered w-full max-w-xs" required />
                    <input onChange={onChangeHandle} type="text" name="worker" placeholder="worker name" className="input input-bordered w-full max-w-xs" required />
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                    <textarea onChange={onChangeHandle} name="description" className="textarea textarea-bordered w-full max-w-xs" placeholder="why you want to update?" required></textarea>
                    <button className="btn btn-outline btn-secondary 
                            hover:btn-warning w-full max-w-xs">Confirm Update</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewUpdate;