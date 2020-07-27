import React from 'react';
import './App.css';
import { ProjectsPage } from "./Components/ProjectsPage"
import { ExpiriencePage } from "./Components/ExpiriencePage"
import { HashRouter, Route, Router, Link, IndexRoute, BrowserRouter } from "react-router-dom"
import {Navbar, NavItem } from "./Components/Navbar"


function App() { 
  return (
      <div className="app">
      
          <HashRouter>
              <Navbar title="Christopher Garner">
                  <NavItem text="Projects" link="/"></NavItem>
                  <NavItem text="Education" link="/education"></NavItem>
                  <NavItem text="Tools" link=""></NavItem>
                  <NavItem text="Contact" link=""></NavItem>
              </Navbar>
          <Route exact path={"/"} component={ProjectsPage}></Route>
          <Route exact path={"/education"} component={ExpiriencePage}></Route>
          </HashRouter>
      </div>
  );
}

export default App;
