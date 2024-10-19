import { useEffect, useState } from "react";
import { getData } from "../services/apiService";
import { Button, Table } from "react-bootstrap";

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
                setProductos(result.data);
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
            <h1>Datos de los productos</h1>
            <Table bordered hover /* variant="primary" */>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {productos.map((producto, index) => (
                        <tr key={producto.id}>
                            <td>{index+1}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio}</td>
                            <td>
                                <Button variant="success">Editar</Button>
                                <Button className="ms-2" variant="danger">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}