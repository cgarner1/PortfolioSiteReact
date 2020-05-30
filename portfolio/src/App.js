import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavItem} from "./Components/Navbar"
import { HeaderText } from "./Components/PageHeader"



function App() {
  return (
      <div class="Page-Content">
          <Navbar>
              <NavItem icon="&#129409;" />
              <NavItem icon="&#129409;" />
              <NavItem icon="&#129409;" />
          </Navbar>
          <div class="main-content-grid">
              
              <div class="negative-left"></div>
              <div class="viewport-entry">
                  <HeaderText title="PROJECTS">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Amet venenatis urna cursus eget nunc scelerisque viverra mauris in.
                      Tempus iaculis urna id volutpat lacus laoreet non curabitur. Ultrices
                      
                  </HeaderText>
              </div>
              <div class="negative-right"></div>

          </div>
      </div>
  );
}

export default App;
