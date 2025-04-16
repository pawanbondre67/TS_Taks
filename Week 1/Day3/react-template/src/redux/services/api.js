import axios from 'axios';

export const login = async (credentials) => {
    const response = await axios.post('http://localhost:5000/login', credentials);
    return response.data;
};

export const sendFormData = async (formData) => {
    const response = await axios.post('http://localhost:5000/submit', formData);
    return response.data;
};
