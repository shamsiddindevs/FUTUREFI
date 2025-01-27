// src/services/apiService.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;


let lang = localStorage.getItem("language") || "en";

export const getSwaggerData = async (end) => {
    try {
        const response = await axios.get(`${BASE_URL}${lang}/api/v1/${end}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
