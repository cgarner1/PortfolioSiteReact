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
              <div className ="middle-grid">



                  {/* MAIN CONTENT*/}
                  <section id="home-content">
                      <div className="viewport-entry">
                          <HeaderText title="PROJECTS">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Amet venenatis urna cursus eget nunc 
                      
                          </HeaderText>
                      </div>
                  </section>

                  <Project sectionId="SWE" sectionHeader="Software Engineering" name="ML Models to XLSX" date="2020">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. In ornare quam viverra orci. Et ultrices neque ornare aenean 
                      euismod elementum. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Nisi vitae 
                      suscipit tellus mauris a. Sit amet nisl suscipit adipiscing bibendum est. Sagittis eu volutpat odio facilisis 
                      mauris. Eget lorem dolor sed viverra ipsum. Risus viverra adipiscing at in tellus. Commodo quis imperdiet massa 
                      tincidunt nunc pulvinar. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Iaculis urna id volutpat lacus 
                      laoreet non curabitur gravida arcu. At erat pellentesque adipiscing commodo. In arcu cursus euismod quis viverra nibh cras. 
                      Posuere morbi leo urna molestie at elementum. Congue mauris rhoncus aenean vel elit. Urna neque viverra justo nec ultrices. 
                      Adipiscing elit ut aliquam purus sit amet luctus. Vehicula ipsum a arcu cursus vitae. Quam vulputate dignissim suspendisse in.
                  </Project>


              </div>
              

              

              <div className="negative-right"></div>
          </div>
      </div>
  );
}

export default App;
