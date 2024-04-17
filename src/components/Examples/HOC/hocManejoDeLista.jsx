import { useState } from "react"
import { MdDriveFileRenameOutline } from "react-icons/md"

const hocManejoDeLista = (Componente) => {

    const HocManejoDeLista = () =>{
        const [tareas, setTareas] = useStates ([])

        const añadirTarea = (nuevaTarea) =>{
            setTareas ([ ...tareas, nuevaTarea ])
        }

        const eliminarTarea = (idTarea) =>{
            const tareasFiltradas = tareas.filter((tarea) => tarea.id !== idTarea )
            setTareas(tareasFiltradas)

        }

        return <Componente tareas={tareas} añadirTarea={añadirTarea} eliminarTarea={eliminarTarea} />
    
    }

    return HocManejoDeLista

}
//exportamos nuestro HOC 
export default hocManejoDeLista