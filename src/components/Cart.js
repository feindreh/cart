import { useState } from "react"
import warehouse from "../warehouse"

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
        <div>
            {cartArr.map((ware)=>{id++;return <div key={id}>{ware.name} {ware.price.toFixed(2)} € x {ware.count} = {(ware.price * ware.count).toFixed(2)} €</div>})}
            <div>Summe : {Sum} €</div>
        </div>
    )
}

export default Cart


