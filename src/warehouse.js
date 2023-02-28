import stoff1 from "./img/stoff1.webp"
import stoff2 from "./img/stoff2.webp"
import stoff3 from "./img/stoff3.webp"
import stoff4 from "./img/stoff4.webp"

import hackeln1 from "./img/hackeln1.webp"
import hackeln2 from "./img/hackeln2.webp"
import hackeln3 from "./img/hackeln3.webp"
import hackeln4 from "./img/hackeln4.jpeg"

import stricken1 from "./img/stricken1.png"
import stricken2 from "./img/stricken2.jpg"
import stricken3 from "./img/stricken3.webp"
import stricken4 from "./img/stricken4.webp"
import stricken5 from "./img/stricken5.jpg"
import stricken6 from "./img/stricken6.jpg"

import wolle1 from "./img/wolle1.jpg"
import wolle2 from "./img/wolle2.jpg"
import wolle3 from "./img/wolle3.jpg"
import wolle4 from "./img/wolle4.jpg"

let id = 0
const stuff = (type,logo,name) => {
    id++;
    return {type,logo,name,id:id}
}


const warehouse = [];

warehouse.push(stuff("stoff",stoff1,"Stoff 1"))
warehouse.push(stuff("stoff",stoff2,"Stoff 2"))
warehouse.push(stuff("stoff",stoff3,"Stoff 3"))
warehouse.push(stuff("stoff",stoff4,"Stoff 4"))

warehouse.push(stuff("wolle",wolle1,"Wolle 1"))
warehouse.push(stuff("wolle",wolle2,"Wolle 2"))
warehouse.push(stuff("wolle",wolle3,"Wolle 3"))
warehouse.push(stuff("wolle",wolle4,"Wolle 4"))

warehouse.push(stuff("hackeln",hackeln1,"Häckeln 1"))
warehouse.push(stuff("hackeln",hackeln2,"Häckeln 2"))
warehouse.push(stuff("hackeln",hackeln3,"Häckeln 3"))
warehouse.push(stuff("hackeln",hackeln4,"Häckeln 4"))

warehouse.push(stuff("stricken",stricken1,"Stricken 1"))
warehouse.push(stuff("stricken",stricken2,"Stricken 2"))
warehouse.push(stuff("stricken",stricken3,"Stricken 3"))
warehouse.push(stuff("stricken",stricken4,"Stricken 4"))
warehouse.push(stuff("stricken",stricken5,"Stricken 5"))
warehouse.push(stuff("stricken",stricken6,"Stricken 6"))

export default warehouse