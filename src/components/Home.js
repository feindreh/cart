import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
           <Link to="/Wolle">Wolle</Link>
           <Link to="/Stoff">Stoff</Link>
           <Link to="/Strick">Strick</Link>
           <Link to="/Haeckel">Häckeln</Link>
        </div>
    )
}

export default Home

