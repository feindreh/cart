import { useParams } from "react-router-dom"
import warehouse from "../warehouse"

function Buy(){
    const {id} = useParams()

    const item = warehouse.filter(ware => ware.id === +id)[0]
    const {logo,name,price,unit,description} = item

    return(
        <div className="buy">
        <div className="imgWrap">
            <img className = "buyIMG" src={logo}></img>
        </div>
        <div className="buyWrap">
            <div className="buyText">
                <div className="buyName">
                    {name}
                </div>
                <div className="buyDesc">
                      {description}
                </div>
                <div className="buyPrice">
                    Preis: {price}€ pro {unit}
                </div>
            </div>
            <button className="buyButton" type="button">Bestellen</button>
        </div>
        </div>
    )
}

export default Buy