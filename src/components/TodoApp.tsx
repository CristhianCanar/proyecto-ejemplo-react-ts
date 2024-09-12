import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [getNuevaTarea, setNuevaTarea] = useState<string>('')
    const [getListaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if(getNuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, getNuevaTarea])
        // setListaTareas([getNuevaTarea])
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input
                    type="text"
                    value={getNuevaTarea}
                    onChange={ (e) => setNuevaTarea(e.target.value) }
                    placeholder="Nueva tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={getListaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}