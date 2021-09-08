
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Router from './Router';
import Header from "./Header";
import Footer from "./Footer";
// import Accueil from "./Accueil";
// import About from "./About";
// import Logement from "./Logement";
// import Error from "./Error";
import '../styles/Layout.css';





class App extends React.Component {

  render (){
    return (
      <div className="Layout">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
      </div>
    )
  } 
}

export default App


/* <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/logement/:id">
            <Logement />
          </Route>
          <Route path="/about">
            <About cssStyle="layout-about"/>
          </Route>
          <Route >
            <Error errorNumber="404" />
          </Route>
        </Switch> */







// function App() {

//   return (
//       <div className="Layout">
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path="/">
//             <Accueil />
//           </Route>
//           <Route path="/logement/:id">
//             <Logement />
//           </Route>
//           <Route path="/about">
//             <About cssStyle="layout-about"/>
//           </Route>
//           <Route >
//             <Error errorNumber="404" />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//       </div>
    
//   );
// }

// export default App;
