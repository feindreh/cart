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
const stuff = (type,logo,name,description,price,unit) => {
    id++;
    return {type,logo,name,id:id,description,price,unit}
}


const warehouse = [];

warehouse.push(stuff("stoff",stoff1,"Roter Stoff","1m² Stoff",3.5,"1m²"))
warehouse.push(stuff("stoff",stoff2,"Pinker Stoff","1m² Stoff",3.5,"1m²"))
warehouse.push(stuff("stoff",stoff3,"Grüner Stoff","1m² Stoff",3.5,"1m²"))
warehouse.push(stuff("stoff",stoff4,"Blauer Stoff","1m² Stoff",3.5,"1m²"))

warehouse.push(stuff("wolle",wolle1,"Lila Wolle","200g Garn",4.80,"200g"))
warehouse.push(stuff("wolle",wolle2,"Rosa Wolle","200g Garn",4.80,"200g"))
warehouse.push(stuff("wolle",wolle3,"Türkise Wolle","300g Garn",5.80,"300g"))
warehouse.push(stuff("wolle",wolle4,"Blau Wolle","300g Garn",5.80,"300g"))

warehouse.push(stuff("hackeln",hackeln1,"Anfänger Set","Für Anfänger geeignet",12.50,"Set"))
warehouse.push(stuff("hackeln",hackeln2,"Profi Set","Für Katharina geeignet",19.50,"Set"))
warehouse.push(stuff("hackeln",hackeln3,"Garn Halter","Ökologisch abbaubar",7,"Halter"))
warehouse.push(stuff("hackeln",hackeln4,"Garn Halter","Perfekt für Anfänger",12.50,"Halter"))

warehouse.push(stuff("stricken",stricken1,"Rundstricknadel","Perfekt für Fortgeschrittene",33.50,"Nadel"))
warehouse.push(stuff("stricken",stricken2,"Stricketui","Aus echtem Leder",18,"Etui"))
warehouse.push(stuff("stricken",stricken3,"Rundstricknadel","Anfänger Nadeln",33.50,"Nadel"))
warehouse.push(stuff("stricken",stricken4,"Strick zubehör","Komplett Set für Neustarter",25,"Set"))
warehouse.push(stuff("stricken",stricken5,"Rundstricknadel","Extra Robust für Kinder",9.50,"Nadel"))
warehouse.push(stuff("stricken",stricken6,"Strickset","Ein Komplettes Set mit Nadeln",50,"Set"))

export default warehouse