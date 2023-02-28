import Item from "./item"

import stoff1 from "../img/stoff1.webp"
import stoff2 from "../img/stoff2.webp"
import stoff3 from "../img/stoff3.webp"
import stoff4 from "../img/stoff4.webp"

function Stoff(){
    return(
        <div className = "item-container">
            <Item logo = {stoff1} name = {"Stoff 1"}/>
            <Item logo = {stoff2} name = {"Stoff 2"}/>
            <Item logo = {stoff3} name = {"Stoff 3"}/>
            <Item logo = {stoff4} name = {"Stoff 4"}/>
        </div>
    )
}

export default Stoff