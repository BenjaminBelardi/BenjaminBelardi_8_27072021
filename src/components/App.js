
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Accueil from "./Accueil";
import About from "./About";
import Logement from "./Logement";
import '../styles/Layout.css'



function App() {

  return (
      <div className="Layout">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/logement/:id">
            <Logement />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {() => <div style={{textAlign : "center" , color:"red", fontSize :"5rem"}}>Erreur 404</div>}
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
}

export default App;
