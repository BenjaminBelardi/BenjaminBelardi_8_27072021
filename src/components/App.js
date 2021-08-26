
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Accueil from "./Accueil";
import About from "./About";
import Logement from "./Logement";
import Error from "./Error";
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
          <Route >
            <Error errorNumber="404" />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </div>
    
  );
}

export default App;
