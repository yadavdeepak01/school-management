import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('contact', data.contact);
        formData.append('image', data.image[0]);
        formData.append('email_id', data.email_id);

        await axios.post('/api/addSchool', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label>Address</label>
                <input {...register('address', { required: true })} />
                {errors.address && <span>This field is required</span>}
            </div>
            <div>
                <label>City</label>
                <input {...register('city', { required: true })} />
                {errors.city && <span>This field is required</span>}
            </div>
            <div>
                <label>State</label>
                <input {...register('state', { required: true })} />
                {errors.state && <span>This field is required</span>}
            </div>
            <div>
                <label>Contact</label>
                <input {...register('contact', { required: true })} />
                {errors.contact && <span>This field is required</span>}
            </div>
            <div>
                <label>Image</label>
                <input type="file" {...register('image', { required: true })} />
                {errors.image && <span>This field is required</span>}
            </div>
            <div>
                <label>Email</label>
                <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email_id && <span>This field is required and should be a valid email</span>}
            </div>
            <button type="submit">Add School</button>
        </form>
    );
};

export default AddSchool;
