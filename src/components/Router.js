import React from 'react'
import {Switch, Route} from "react-router-dom";
import Accueil from "./Accueil";
import About from "./About";
import Logement from "./Logement";
import Error from "./Error";

class Router extends React.Component {

    render(){
        const routes = [
            {
                path: '/',
                component : Accueil,
                exact: true
            },
            {
                path: '/logement/:id',
                component : Logement
            },
            {
                path: '/about',
                component : About ,
                exact : true
            },
            {
                path: '*',
                component : ({errorNumber}) => {
                    return <Error errorNumber={'404'} />
                }

            },
        ]

        return(
            <Switch>
                {routes.map((route, index)=> (
                     <Route key={index} {...route} />
                ))}
            </Switch>
        )
    }

}

export default Router

