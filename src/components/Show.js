import Item from "./item"
import { useParams } from "react-router-dom"


function Show(props){
    const {type} = useParams()
    const {warehouse} = props
    const items = warehouse.filter((ware) => ware.type === type)
    return(
        <div className = "item-container">
            {items.map((ware)=>{
                return <Item logo={ware.logo} name={ware.name} id={ware.id}key = {ware.id}/>
            })}
        </div>
    )
}

export default Show