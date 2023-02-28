import { Link } from "react-router-dom"

function Item(props){
    //Link name logo
    const {name,logo,id} = props
    return(
        <Link to={`/buy/${id}`}>
            <div className = "container">
                <img src={logo} alt=""></img>
                <div>{name}</div>
            </div>
        </Link>
            
    )
}

export default Item