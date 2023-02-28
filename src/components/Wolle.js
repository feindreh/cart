import Item from "./item"

import wolle1 from "../img/wolle1.jpg"
import wolle2 from "../img/wolle2.jpg"
import wolle3 from "../img/wolle3.jpg"
import wolle4 from "../img/wolle4.jpg"

function Wolle(){
    return(
        <div className = "item-container">
            <Item logo = {wolle1} name = {"Wolle 1"}/>
            <Item logo = {wolle2} name = {"Wolle 2"}/>
            <Item logo = {wolle3} name = {"Wolle 3"}/>
            <Item logo = {wolle4} name = {"Wolle 4"}/>
        </div>
    )
}

export default Wolle