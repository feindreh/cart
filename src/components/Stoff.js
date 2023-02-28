import Item from "./item"



function Stoff(props){
    const {warehouse} = props
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