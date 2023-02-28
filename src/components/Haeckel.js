import Item from "./item"

import hackeln1 from "../img/hackeln1.webp"
import hackeln2 from "../img/hackeln2.webp"
import hackeln3 from "../img/hackeln3.webp"
import hackeln4 from "../img/hackeln4.jpeg"

function Haeckel(){
    return(
        <div className = "item-container">
            <Item logo = {hackeln1} name = {"Häckeln 1"}/>
            <Item logo = {hackeln2} name = {"Häckeln 2"}/>
            <Item logo = {hackeln3} name = {"Häckeln 3"}/>
            <Item logo = {hackeln4} name = {"Häckeln 4"}/>
        </div>
    )
}

export default Haeckel