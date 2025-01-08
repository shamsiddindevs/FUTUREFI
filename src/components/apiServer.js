// src/services/apiService.js
import axios from 'axios';

const BASE_URL = 'https://mission.uz/en/api/v1/';

export const getSwaggerData = async (end) => {
    try {
        const response = await axios.get(`${BASE_URL}${end}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
