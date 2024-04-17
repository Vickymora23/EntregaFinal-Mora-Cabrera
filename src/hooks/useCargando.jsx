import { useState } from "react"


const  useCargando = () => {
const [cargando, setCargando] = useState (false)

const mostrarCargando = () => setCargando (true)

const ocultarCargando = () => setCargando (false)

const pantallaDrCarga = <div> Cargando... </div>

return { cargando, mostrarCargando, ocultarCargando, pantallaDrCarga}

}

export default useCargando