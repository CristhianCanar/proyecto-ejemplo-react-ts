import axios from "axios";
interface Data {
    data : Producto[]
}

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

// Se coloca el BASE URL -> url base del backend
const API_URL = 'http://localhost/backend-api/public/api';

// Funcion asincrona para hacer la solicitud
export const getData = async(): Promise<Data> => {
    try {
        const response = await axios.get<Data>(`${API_URL}/productos`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la data', error);
        throw error; // Seguro para el manejo de excepciones
    }
}
