import { Link } from "react-router-dom"

function Card(props){
    //Link name logo
    const {link,name,logo} = props
    return(
        <Link to={link}>
            <div className = "container">
                <img src={logo} alt=""></img>
                <div>{name}</div>
            </div>
        </Link>
    )
}

export default Card