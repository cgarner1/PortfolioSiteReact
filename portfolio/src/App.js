import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavItem} from "./Components/Navbar"
import { HeaderText } from "./Components/PageHeader"
import { Project} from "./Components/Project"



function App() {
  return (
      <div className="Page-Content">
          <Navbar>
              <NavItem icon="&#129409;" />
              <NavItem icon="&#129409;" />
              <NavItem icon="&#129409;" />
          </Navbar>
          <div className ="main-content">
              <div className="negative-left"></div>
              <section id="home-content-grid">
                  
                  <div className="viewport-entry">
                      <HeaderText title="PROJECTS">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Amet venenatis urna cursus eget nunc scelerisque viverra mauris in.
                          Tempus iaculis urna id volutpat lacus laoreet non curabitur. Ultrices
                      
                      </HeaderText>
                  </div>
                  
              </section>
              {/* END home-content-grid */}


              <div className="negative-right"></div>
          </div>
      </div>
  );
}

export default App;
