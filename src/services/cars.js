import { http } from '@/services/http';

export const getCars = async () => {
    const response = await http.get('');
    const cars = response.data;
    return cars;
}

export const getOneCar = async (idCar) => {
    try {
        const response = await http.get(`/${idCar}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
};

export const postRecipe = async (newCar) => {
    try {
        const response = await http.post('/', newCar);
        return response.data;
    } catch (error) {
        console.error('Error posting recipe:', error);
        throw error;
    }
};