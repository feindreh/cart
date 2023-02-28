import Item from "./item"


function Wolle(props){
    const {warehouse} = props
    const items = warehouse.filter((ware) => ware.type === "wolle")
    return(
        <div className = "item-container">
            {items.map((ware)=>{
                return <Item logo={ware.logo} name={ware.name} id={ware.id}key = {ware.id}/>
            })}
        </div>
    )
}

export default Wolle