import { Link } from "react-router-dom"
import Card from "./card"

import wolleIMG from "../img/wolle.jpg"
import hero from "../img/hero.jpg"

function Home(){
    return(
        <>
            <div id="hero">
                <img src={hero} alt=""></img>
                <div id="hero-text">Katharinas <br></br>Strick Shop</div>
            </div>
            <div id="home">
                <Card link="/Wolle" name="Wolle" logo={wolleIMG}/>
                <Card link="/Stoff" name="Stoff" logo={wolleIMG}/>
                <Card link="/Haeckel" name="Häckel" logo={wolleIMG}/>
                <Card link="/Strick" name="Strick" logo={wolleIMG}/>
            </div>
        </>
    )
}

export default Home

