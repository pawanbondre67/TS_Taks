import React, { useState } from 'react';
import Spinner from './Spinner';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { submitStart, submitSuccess, submitFailure } from '../redux/slices/formDataSlice';
import { sendFormData } from '../redux/services/api';

const FormPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { isSubmitting } = useSelector((state) => state.formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); 
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        dispatch(submitStart());
        try {
            await sendFormData(formData);
            dispatch(submitSuccess());
            toast('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.log(error);
            dispatch(submitFailure(error.message));
            toast.error('Failed to submit form');
        }
    };

    const handleCancel = () => {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 flex items-center justify-center">
            <div className="bg-white m-3 p-10 rounded-lg shadow-lg md:mx-auto max-h-fit max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">FeedBack Form</h1>
                <p className="text-gray-700 mb-4 text-center">
                    We value your feedback. Please fill out the form below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded`}
                            rows="4"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <div className="sm:flex sm:flex-row-reverse flex gap-4">
                        <button
                            className="w-fit rounded-lg text-sm px-5 focus:outline-none h-[40px] border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500 text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
                            type="submit"
                        >
                            {isSubmitting ? (
                                <div className="flex gap-2 justify-center items-center">
                                    Submitting <Spinner />
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        <button
                            className="w-fit rounded-lg text-sm px-5 focus:outline-none h-[40px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            <ToastContainer autoClose={2000}  draggable />
        </div>
    );
};

export default FormPage;
