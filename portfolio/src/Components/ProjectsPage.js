import React from 'react';
import { Navbar, NavItem } from "./Navbar"
import { HeaderText } from "./PageHeader"
import { Project } from "./Project"

export function ProjectsPage() {
    return (
        <div className="page-content">
            <Navbar title="Christopher Garner">
                <NavItem text="Education" link=""></NavItem>
                <NavItem text="Tools" link=""></NavItem>
                <NavItem text="Contact" link=""></NavItem>
            </Navbar>
            <div className="main-content">
                <div className="negative-left"></div>
                <div className="middle-grid">



                    {/* MAIN CONTENT*/}
                    <section id="home-content">
                        <div className="viewport-entry">
                            <HeaderText title="PROJECTS">
                                Continued learning requires constantly building meaningful projects inside and outside the workplace. Throughout my journey in the Computer Science field,
                                I have built, and continue to build multiple projects within the Software Engineering, Machine Learning, and Game Development space. Click on one of the links below to learn more.
                          </HeaderText>
                        </div>
                    </section>

                    {/* SWE */}
                    <section id="SWE"><h2>Software Engineering</h2></section>
                    <Project name="ML Models to XLSX" date="Professional - 2019" img="/images/xlsx.png">
                        Built and tested an internal API used to automatically extract performance data from trained machine learning models,
                        and organize that data elegantly in xlsx files, and JSON files to be consumed by other services.
                  </Project>

                    <Project name="Full-Stack .Net Core Demo" date="Personal - 2020" img="/images/ASPDemo.png">
                        Learned the ins and outs of full-stack development using .Net Core MVC, Entity Framework, and Bootstrap to build/deploy a web application with data persistence, user authentication,
                        and asynchronous API calls using RESTful conventions.
                  </Project>

                    <Project name="Headphone Finder Site" date="Personal - 2020" img="/images/Site_Showoff.gif">
                        Designed and implemented a dynamic front-end for a website designed to find optimal prices on headphones. The user expirience was designed to be easy to navigate,
                        yet visibly pleasing.
                  </Project>

                    {/* ML */}
                    <section id="ML"><h2>Machine Learning</h2></section>
                    <Project name="Deep Learning Environment" date="Personal - 2019" img="/images/deep-q.gif">
                        Developed an AI environment from scratch designed to train reinforcement learning algorithms (Neural Networks, Genetic Algorithms, etc). The environment was based on
                      <a href="https://gym.openai.com/" target="_blank"> OpenAI's Gym API.</a>  Designed a custom Deep-Q algorithm that then learned and mastered the environment.
                  </Project>

                    <Project name="Neural Network CLI App" date="Personal - 2019" img="/images/cmd_app_code.png">
                        Developed easy-to-use command line application designed to quickly choose, train, and implement multiple Convolutional Neural Networks using PyTorch and Python's
                        CLI tools.
                  </Project>

                    {/* Game Dev */}
                    <section id="GD"><h2>Game Development</h2></section>
                    <Project name="Triangle Rush" date="Personal - 2020" img="/images/trirush.png">
                        Collaborated with Elon University students to build a 2D shoot-em-up in Unity. Triangle Rush featured physics-based movement, the ability to grab and shoot back items
                        in the game world, mutliple enemy types, and power-ups.
                  </Project>

                    <Project name="Unannounced Indie Project" date="Personal - 2020" img="/images/empty-image.jpg">
                        Currently building a larger scale indie project in Unity. More details in the future!
                  </Project>
                </div>




                <div className="negative-right"></div>
            </div>
        </div>



        );
}