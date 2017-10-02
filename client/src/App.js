import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./pages/homepage";
import adoptionpage from "./pages/adoptionPage";
import petresults from "./pages/petresults";
import petprofile from "./pages/petprofile";
import Search from "./components/Search/search";
import petProfile from "./components/Petprofile/petProfile";

const App = () => (
 
  <Router>
  <Switch>
    <Route exact path="/" component={homepage} />
    <Route  path="/adoptionpage" component={adoptionpage} />
    <Route  path="/petprofile" component={petprofile} />
    <Route  path="/petresults" component={petresults} />
    <Route exact path="/pets/:_id" component={petProfile} />
    </Switch>
  
</Router>);
  
export default App;
