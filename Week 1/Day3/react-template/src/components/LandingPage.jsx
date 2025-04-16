import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                Welcome to My Page
            </h1>
            <p className="text-xl text-gray-800 mb-4 text-center max-w-2xl">
                Hi, I'm Pawan. This is a responsive landing page built with TailwindCSS.
            </p>
            <p className="text-md text-gray-700 mb-8 text-center max-w-xl">
                This project is part of my learning track to enhance my skills in React and TailwindCSS.
            </p>

            <div className="flex items-center justify-center mt-6">
                <div className="relative group">
                    <button
                        className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-lg cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
                        onClick={() => navigate('/form')}
                    >
                        <span
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[3px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span className="relative z-10 block px-8 py-4 rounded-full bg-gray-950">
                            <div className="relative z-10 flex items-center space-x-3">
                                <span className="transition-all duration-500 group-hover:translate-x-1">
                                    Let's Get Started
                                </span>
                                <svg
                                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
