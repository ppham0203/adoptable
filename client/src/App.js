import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homepage from "./pages/homepage";
import adoptionpage from "./pages/adoptionPage";
import petresults from "./pages/petresults";
import petprofile from "./pages/petprofile";

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={homepage} />
      <Route exact path="/adoptionpage" component={adoptionpage} />
      <Route exact path="/petprofile" component={petprofile} />
      <Route exact path="/petresults" component={petresults} />
      
    </div>
  </Router>;
  
export default App;
