
import Card from "./card"

import wolleIMG from "../img/wolle.jpg"
import stoffIMG from "../img/stoff.webp"
import haeckelIMG from "../img/hackeln.jpeg"
import strickIMG from "../img/stricken.jpg"
import hero from "../img/hero.jpg"

function Home(){
    return(
        <>
            <div id="hero">
                <img src={hero} alt=""></img>
                <div id="hero-text">Katharinas <br></br>Strick Shop</div>
            </div>
            <div className = "item-container" id="home">
                <Card link="/Wolle" name="Wolle" logo={wolleIMG}/>
                <Card link="/Stoff" name="Stoffe" logo={stoffIMG}/>
                <Card link="/Haeckel" name="Häckeln" logo={haeckelIMG}/>
                <Card link="/Strick" name="Stricken" logo={strickIMG}/>
            </div>
        </>
    )
}

export default Home

