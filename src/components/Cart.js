import { Link } from "react-router-dom"

function Cart(props){

    const {cart} = props
    const cartArr = []
    for(let key in cart){
        if(cart[key].count !== 0){
           cartArr.push(cart[key]) 
        }
    }

    const sumIt = () => {
        let sum = 0
        for(let i = 0; i < cartArr.length;i++){
            sum += (cartArr[i].count * cartArr[i].price)
        }
        return sum
    }
    const Sum = sumIt()
 

    if(cartArr.length ===0){return <></>}
    let id = 0
    return(
        <div id="cartWrap">
            <div id="cart">
                {cartArr.map((ware)=>{id++;return (
                    <div key={id} className="cartText">
                        <div className ="cartName">{ware.name} {ware.price.toFixed(2)} € </div> <div className ="cartCount">x{ware.count}</div> <div className ="cartEquals">=</div> <div className ="cartPrice">{(ware.price * ware.count).toFixed(2)}€</div>
                    </div>
                )})}
                <div className ="cartSum">Summe : {Sum} €</div>
            </div>
            <Link to="/"><button type="button" id="goon">Weiter Shoppen</button></Link>
            <Link to="/fin"><button type="button" id="fin">Bezahlen</button></Link>
        </div>
    )
}

export default Cart


