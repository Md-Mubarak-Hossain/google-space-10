import { useState } from "react";

const Thumb=()=>{
    const [uploadSuccess,setUploadSuccess]=useState('hidden')
    const imageHostKey = "dfaf988d2949563367b37e46912e3da6";
    const handleUploadData = e => {
        e.preventDefault();
        const form=e.target;
        const mainThumb=form.mainThumb.value;
        const thumb1=form.thumb1.value;
        const thumb2=form.thumb2.value;
        const thumb3=form.thumb3.value;
        const thumb4=form.thumb4.value;
        const thumb5=form.thumb5.value;
        const thumb6=form.thumb6.value;
        const miniThumb={
            mainThumb:mainThumb,
            subThumb1:thumb1,
            subThumb2:thumb2,
            subThumb3:thumb3,
            subThumb4:thumb4,
            subThumb5:thumb5,
            subThumb6:thumb6,
        }

        
        // formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(miniThumb)
                    })
            .then(res => res.json())
            .then(photo => {
                if (photo.success) {
                    console.log(photo);
                    setUploadSuccess('block')
                    alert('thumb successfully added')
                    // console.log(photo.data.url);
                    // const taskPost = {
                    //     name: data.name,
                    //     worker: data.worker,
                    //     email: data.email,
                    //     live: data.live,
                    //     client: data.client,
                    //     server: data.server,
                    //     description: data.description,
                    //     image: photo.data.url
                    // }

                    // save project information to the database
                    // fetch(`https://projects-drive-file.vercel.app/mytask`, {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //     },
                    //     body: JSON.stringify(taskPost)
                    // })
                    //     .then(res => res.json())
                    //     .then(result => {
                    //         console.log(result);
                    //         if (result.acknowledged) {
                    //             alert(`${data.name} is added successfully`);
                    //         }
                    //     })
                }
            })
    }
    const projectThumb = [
        {type: "file", name: "mainThumb", placeholder: "1.Projects main thumb:" },
        {type: "file", name: "thumb1", placeholder: "2.Mini thumb 1:" },
        {type: "file", name: "thumb2", placeholder: "3.Mini thumb 2:" },
        {type: "file", name: "thumb3", placeholder: "4.Mini thumb 3:" },
        {type: "file", name: "thumb4", placeholder: "5.Mini thumb 4:" },
        {type: "file", name: "thumb5", placeholder: "6.Mini thumb 5:" },
        {type: "file", name: "thumb6", placeholder: "7.Mini thumb 6:" },
        
    ];
    const inputClassName = "my-1 input input-bordered w-full min-w-72";
    return(
        <div className="py-20">
        <p className={`${uploadSuccess} text-green-500`}></p>
        <form onSubmit={handleUploadData}
        className='w-1/2 px-5'>
                    {projectThumb.map((thumb,index) => <div key={index}>
                        {thumb?.placeholder}<input
                            type={thumb?.type}                          
                            name={thumb?.name} 
                            className={`${thumb?.className}  ${inputClassName}`}
                            value={thumb?.value} 
                            />
                    </div>
                    )}
                    <button className="btn my-1 input input-bordered w-full min-w-72">Upload Images</button>
                </form>
        </div>
    )
}
export default Thumb;