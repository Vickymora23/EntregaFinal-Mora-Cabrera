import React from 'react'
import hocManejoDeLista from './hocManejoDeLista'

export const ListadoTareas = ({ tareas, añadirTarea, eliminarTarea}) => {
  return (
    <div>

    </div>
  )
}

const ListadoTareasConHoc = hocManejoDeLista(ListadoTareas)

export default ListadoTareasConHoc 