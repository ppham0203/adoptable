import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./pages/homepage";
import adoptionpage from "./pages/adoptionPage";
import petresults from "./pages/petresults";
import petprofile from "./pages/petprofile";
import Search from "./components/Search/search";
import petProfile from "./components/Petprofile/petProfile";
import thankyouPage from "./pages/thankyouPage";


const App = () => (
 
  <Router>
  <Switch>
    <Route exact path="/" component={homepage} />
    <Route  path="/adoptionpage" component={adoptionpage} />
    <Route  path="/petprofile" component={petprofile} />
    <Route  path="/petresults" component={petresults} />
    <Route exact path="/adoptionPets/:id" component={petProfile} />
    <Route exact path="/thankyouPage" component={thankyouPage} />
    </Switch>
  
</Router>);
  
export default App;
