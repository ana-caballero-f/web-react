import { useParams } from "react-router-dom"
import DetalleComponent from "../../components/DetalleComponent/DetalleComponent"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getFotoDetalle } from "../../store/peticiones/actions"



export default function DetalleFotoPage() {

    const params= useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getFotoDetalle(params.id))
    }, [])

       return(
       <div>
       PAGINA foto detalle
            <DetalleComponent></DetalleComponent>
       </div> 
    )
}