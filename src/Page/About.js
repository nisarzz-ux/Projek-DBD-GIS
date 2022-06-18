import React, { useEffect, useState } from "react";
// import { statesData } from "../Data/jatimgeo2020.js";
import axios from "axios";
import "./Map-Desain.css";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavLink,
    NavItem,
    CardTitle
} from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function About() {
  const [dataPeta, setDataPeta] = useState([]);

  useEffect(() => {
    getDataPeta();
  }, []);

  function getDataPeta() {
    axios.get("http://192.168.1.13:3001/api/v1/list/dbd").then((response) => {
      console.log(response.data);
      setDataPeta(response.data);
    });
  }

  // console.log(dataPeta)
  return (
    <div className="about-body">
        
      <Navbar color="light" expand="md" light>
        <NavbarBrand >Pesebaran Penyakit DBD</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="m-lg-auto" navbar>
            <NavItem>
              <NavLink href="/">Peta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Informasi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Tentang Kami</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

        <div class="container">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-2">
                <div class="col">
                    <div className="card-1">
                        <div className="card-inside">
                            <div className="premium">
                                4 D4 IT A
                            </div>
                            <div className="month">
                                <img 
                                    src={require("../Data/dota-2018-techies.jpg").default} 
                                    alt="logo thumbnail"
                                    className="ukuran" 
                                />
                            </div>
                            <div className="get-started">
                                Mbak Citra
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div class="col">
                    <div className="card-1">
                        <div className="card-inside">
                            <div className="premium">
                                4 D4 IT A
                            </div>
                            <div className="month">
                                <img 
                                    src={require("../Data/dota-2018-techies.jpg").default} 
                                    alt="logo thumbnail"
                                    className="ukuran" 
                                />
                            </div>
                            <div className="get-started">
                                Intan
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div class="col">
                    <div className="card-1">
                        <div className="card-inside">
                            <div className="premium">
                                4 D4 IT A
                            </div>
                            <div className="month">
                                <img 
                                    src={require("../Data/dota-2018-techies.jpg").default} 
                                    alt="logo thumbnail"
                                    className="ukuran" 
                                />
                            </div>
                            <div className="get-started">
                                Ilham
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div class="col">
                    <div className="card-1">
                        <div className="card-inside">
                            <div className="premium">
                                4 D4 IT A
                            </div>
                            <div className="month">
                                <img 
                                    src={require("../Data/dota-2018-techies.jpg").default} 
                                    alt="logo thumbnail"
                                    className="ukuran" 
                                />
                            </div>
                            <div className="get-started">
                                Nisar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
}
export default About;
