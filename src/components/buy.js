import { useParams } from "react-router-dom"
import warehouse from "../warehouse"

function Buy(){
    const {id} = useParams()

    const item = warehouse.filter(ware => ware.id === +id)[0]
    const {logo,name,price,unit,description} = item
    console.log(item)
    console.log(logo,name,price,unit,description)
    return(
        <div className="buy">
        <div class="imgWrap">
            <img className = "buyIMG" src={logo}></img>
        </div>
        <div class="buyWrap">
            <div class="buyText">
                <div class="buyName">
                    {name}
                </div>
                <div class="buyDesc">
                      {description}
                </div>
                <div class="buyPrice">
                    Preis: {price}€ pro {unit}
                </div>
            </div>
            <button className="buyButton" type="button">Bestellen</button>
        </div>
        </div>
    )
}

export default Buy