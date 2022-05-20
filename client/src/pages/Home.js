import React from "react";
import { useParams } from "react-router-dom";


const Home =() =>{

    const {Nameuser} = useParams()
    return(
        <div>
             Hello bienvenu  {Nameuser}
        </div>
    )
}

export default Home;