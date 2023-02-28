import Item from "./item"

import warehouse from "../warehouse"

function Stoff(){

    const items = warehouse.filter((ware) => ware.type === "stoff")
    return(
        <div className = "item-container">
            {items.map((ware)=>{
                return <Item logo={ware.logo} name={ware.name} id={ware.id}key = {ware.id}/>
            })}
        </div>
    )
}

export default Stoff