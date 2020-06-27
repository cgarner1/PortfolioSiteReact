import React from 'react';
import './App.css';
import { ProjectsPage } from "./Components/ProjectsPage"
import { HashRouter, Route, Router, Link, IndexRoute, BrowserRouter} from "react-router-dom"


function App() { 
  return (
      <HashRouter>
          <Route exact path={"/"} component={ProjectsPage}></Route>
      </HashRouter>
  );
}

export default App;
