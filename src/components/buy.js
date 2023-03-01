import { useParams } from "react-router-dom"
import warehouse from "../warehouse"
import { Link } from "react-router-dom"

function Buy(props){
    const {add,cart} = props
    const {id} = useParams()


    const item = warehouse.filter(ware => ware.id === +id)[0]
    const {logo,name,price,unit,description} = item




    return(
        <div className="gigaWrap">
            <div className="buy">
                <div className="buyWrap">
                    <div className="imgWrap">
                        <img className = "buyIMG" src={logo}></img>
                    </div>
                    <div className="buyText">
                        <div className="buyName">
                            {name}
                        </div>
                        <div className="buyDesc">
                            {description}
                        </div>
                        <div className="buyPrice">
                            Preis: {price.toFixed(2)} € pro {unit}
                        </div>
                    </div>
                </div>

                    <Link to="/cart">
                        <div className="shopit">
                            <button type="button" onClick={()=>[add(id)]}>In den Einkaufswagen</button>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default Buy