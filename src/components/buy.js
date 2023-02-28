import { useParams } from "react-router-dom"

function Buy(){
    const {item} = useParams()
    return(
        <>
        Buy{item}
        </>
    )
}

export default Buy