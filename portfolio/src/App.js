import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavItem} from "./Components/Navbar"
import { HeaderText } from "./Components/PageHeader"
import { Project } from "./Components/Project"


function App() { 
  return (
      <div className="page-content">
          <Navbar title="Christopher Garner">
              <NavItem text="Education"></NavItem>
              <NavItem text="Tools"></NavItem>
              <NavItem text="Contact"></NavItem>
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
                  {/* SWE */}
                  <section id="SWE"><h2>Software Engineering</h2></section>
                  <Project name="ML Models to XLSX" date="Professional - 2019" img="./images/xlsx.png">
                      Built and tested an internal API used to automatically extract performance data from trained machine learning models,
                      and organize that data elegantly in xlsx files, and JSON files to be consumed by other services.
                  </Project>

                  <Project name="Full-Stack .Net Core Demo" date="Personal - 2020" img="./images/ASPDemo.png">
                      Learned the ins and outs of full-stack developmnent using .Net Core MVC, Entity Framework, and Bootstrap to build and deploy a web application with data persistence, user authentication,
                      and asynchronous API calls using RESTful conventions. 
                  </Project>

                  <Project name="Headphone Finder Site" date="Personal - 2020" img="./images/Site_Showoff.gif">
                      Designed and implemented a dynamic front-end for a website designed to find optimal prices on headphones. The user expirience was designed to be easy to navigate,
                      yet visibly pleasing.
                  </Project>

                  {/* ML */}
                  <section id="ML"><h2>Machine Learning</h2></section>
                  <Project name="Deep Learning Environment" date="Personal - 2019" img="./images/deep-q.gif">
                      Developed an AI environment from scratch designed to train reinforcement learning algorithms (Neural Networks, Genetic Algorithms, etc). The environment was based on
                      <a href=""> OpenAI's Gym API.</a>  Designed a custom Deep-Q algorithm that then learned and mastered the environment.
                  </Project>

                  <Project name="Neural Network CLI App" date="Personal - 2019" img="./images/cmd_app_code.png">
                      Developed easy to use command line application designed to quickly choose, train, and implement multiple Convolutional Neural Networks using PyTorch and Python's
                      CLI tools.
                  </Project>

                  {/* Game Dev */}
                  <section id="GD"><h2>Game Deveopment</h2></section>
                  <Project name="Traingle Rush" date="Personal - 2020" img="./images/trirush.png">
                      Collaborated with Elon University students to build a 2D shoot-em-up in Unity. Triangle Rush featured physics-based movement, the ability to grab and shoot back items
                      in the game world, mutliple enemy types and power-ups.
                  </Project>

                  <Project name="Unannounced Indie Project" date="Personal - 2020" img="">
                      Currently building a larger scale indie project in Unity. More details in the future! Artwork in image is by Tomas Lean.
                  </Project>
              </div>
              

              

              <div className="negative-right"></div>
          </div>
      </div>
  );
}

export default App;
