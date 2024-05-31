import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Asegúrate de que esta es la URL de tu API
});

export const getHelloWorld = async () => {
    try {
        const response = await api.get('/helloworld');
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};
