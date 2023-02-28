

function Item(props){
    //Link name logo
    const {name,logo} = props
    return(
            <div className = "container">
                <img src={logo} alt=""></img>
                <div>{name}</div>
            </div>
    )
}

export default Item