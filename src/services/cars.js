import http from "@/services/http";

export async function getAllCars() {
    try {
        const response = await http.get("/cars");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function createCar(car) {
    try {
        const response = await http.post("/cars", car);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function updateCar(id, car) {
    try {
        const response = await http.patch('/cars', { ...car, _id: id });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function deleteCar(id) {
    try {
        const response = await http.delete(`/cars/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
