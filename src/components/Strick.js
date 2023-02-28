import Item from "./item"

import stricken1 from "../img/stricken1.png"
import stricken2 from "../img/stricken2.jpg"
import stricken3 from "../img/stricken3.webp"
import stricken4 from "../img/stricken4.webp"
import stricken5 from "../img/stricken5.jpg"
import stricken6 from "../img/stricken6.jpg"

function Strick(){
    return(
        <div className = "item-container">
            <Item logo = {stricken1} name = {"stricken 1"}/>
            <Item logo = {stricken2} name = {"stricken 2"}/>
            <Item logo = {stricken3} name = {"stricken 3"}/>
            <Item logo = {stricken4} name = {"stricken 4"}/>
            <Item logo = {stricken5} name = {"stricken 5"}/>
            <Item logo = {stricken6} name = {"stricken 6"}/>
        </div>
    )
}

export default Strick