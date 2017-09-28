import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homepage from "./pages/homepage";
import adoptionpage from "./pages/adoptionPage";

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={homepage} />
      <Route exact path="/adoptionpage" component={adoptionpage} />
    </div>
  </Router>;
  
export default App;
