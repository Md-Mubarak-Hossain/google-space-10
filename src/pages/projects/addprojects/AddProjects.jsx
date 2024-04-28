import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/Context';
import './Add.css';
const AddProjects = () => {
    const { user, loading } = useContext(AuthContext)
    const { register, handleSubmit} = useForm();
    const imageHostKey = "dfaf988d2949563367b37e46912e3da6";

    const handleUploadData = data => {
        const image = data.image[0];
        const formData = new FormData();

        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photo => {
                if (photo.success) {
                    console.log(photo);
                    console.log(photo.data.url);
                    const taskPost = {
                        name: data.name,
                        worker: data.worker,
                        email: data.email,
                        live: data.live,
                        client: data.client,
                        server: data.server,
                        description: data.description,
                        image: photo.data.url
                    }

                    // save project information to the database
                    fetch(`https://projects-drive-file.vercel.app/mytask`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(taskPost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                alert(`${data.name} is added successfully`);
                            }
                        })
                }
            })
    }

    if (loading) {
        return <p>loading...</p>
    }
    const formFields = [
        { id: 1, type: "text", register: "developer", required: true, defaultValue: user.displayName, placeholder: 'Developer name' },
        { id: 2, type: "email", register: "email", required: true, defaultValue: user.email, placeholder: 'Project email' },
        { id: 3, type: "text", register: "title", required: true, placeholder: 'Enter project title' },
        { id: 4, type: "text", register: "liveSite", required: true, placeholder: 'Enter live site link' },
        { id: 5, type: "text", register: "technology", required: true, placeholder: 'Using Technology' },
        { id: 6, type: "text", register: "responsive", required: true, placeholder: 'Breakpoint web responsive' },
        { id: 7, type: "text", register: "clientSite", required: true, placeholder: 'Enter client site github link' },
        { id: 8, type: "text", register: "serverSite", required: true, placeholder: 'Enter server site github link' },
        { id: 9, type: "textarea", register: "description", required: false, placeholder: 'Projects Description' },

    ];
    const projectThumb = [
        { id: 1, type: "file", register: "thumb1", placeholder: "1.Projects thumb 1:" },
        { id: 2, type: "file", register: "thumb2", placeholder: "2.Projects thumb 2:" },
        { id: 3, type: "file", register: "thumb3", placeholder: "3.Projects thumb 3:" },
        { id: 4, type: "file", register: "thumb4", placeholder: "4.Projects thumb 4:" },
        { id: 5, type: "file", register: "thumb5", placeholder: "5.Projects thumb 5:" },
        { id: 6, type: "file", register: "thumb6", placeholder: "6.Projects thumb 6:" },
        { id: 7, type: "file", register: "thumb7", placeholder: "7.Projects thumb 7:" },
        { id: 8, type: "file", register: "thumb8", placeholder: "8.Projects thumb 8:" }
    ];
    const inputClassName = "my-1 input input-bordered w-full min-w-72";
    return (
        <div className='pt-10'>
            <h2 className="text-amber-400 pb-2">Upload Your Project</h2>
            <div className='w-full mx-auto flex px-5 justify-center'>
                <form onSubmit={handleSubmit(handleUploadData)} className='w-1/2 px-5'>
                    {
                        formFields.map(f => <div key={f.id}>
                            {f.id}{f.id ? "." : ""}{f.placeholder}
                            <input
                                type={f.type}
                                placeholder={`${f?.placeholder}`}
                                defaultValue={f?.defaultValue}
                                {...register(`${f?.register}`,
                                    {
                                        required: f?.required
                                    })}
                                className={`${f?.className} ${inputClassName}`}
                                value={f?.value}
                                name={f?.name}
                            />
                        </div>)
                    }
                    <button className="btn my-1 input input-bordered w-full min-w-72">Submit project</button>
                </form>
                <form className='w-1/2 px-5'>
                    {projectThumb.map(thumb => <div key={thumb.id}>
                        {thumb.placeholder}<input
                            type={thumb.type}
                            {...register(`${thumb?.register}`)}
                            className={`${thumb.className}  ${inputClassName}`}
                            value={thumb?.value} name={thumb?.name} />
                    </div>
                    )}
                    <button className="btn my-1 input input-bordered w-full min-w-72">Upload Images</button>
                </form>
            </div>
        </div>
    );
};

export default AddProjects;