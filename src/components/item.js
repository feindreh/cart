import { Link } from "react-router-dom"

function Item(props){
    //Link name logo
    const {name,logo} = props
    return(
        <Link to={`/buy/${name}`}>
            <div className = "container">
                <img src={logo} alt=""></img>
                <div>{name}</div>
            </div>
        </Link>
            
    )
}

export default Item