import { useEffect, useState } from "react";
import { getData } from "../services/apiService";

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

// React.FC -> definir que la funcion es de ptipo, function component
export const ListaProductos: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setProductos(result);
            } catch (error) {
                setError('Error al cargar los datos! 😔');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div> Cargando... </div>;
    if (error) return <div> {error} </div>

    return (
        <div>
            <h1> Datos de los productos </h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.nombre}</li>
                ))}
            </ul>
        </div>
    );
}