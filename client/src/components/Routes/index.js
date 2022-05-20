import { BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import React from "react";
// import { Redirect } from 'react-router';
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";

const index =() =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/trending" exact component={Trending} />
                {/* <Route path="/" exact component={Profil} /> */}
                {/* <Route path="/home/:Nameuser" exact component={Home} /> */}
                
                <Redirect to ="/"/>
            </Switch>
             
        </Router>
    )
}

export default index;