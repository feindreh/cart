import Item from "./item"



function Show(props){
    const {warehouse,type} = props
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