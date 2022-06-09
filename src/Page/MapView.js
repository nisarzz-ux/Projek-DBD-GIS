import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import { statesData } from "../Data/jatimgeo2020.js";
import L from "leaflet";
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

function MapView() {
  const center = [-6.9039986, 111.3391923];
  const customIcon = new L.Icon({
    iconUrl: require("../Data/pin.png").default,
    iconSize: new L.Point(30, 30),
  });

  const [dataPeta, setDataPeta] = useState([]);

  useEffect(() => {
    getDataPeta();
  }, []);

  function getDataPeta() {
    axios.get("http://yourUrl").then((response) => {
      console.log(response.data);
      setDataPeta(response.data);
    });
  }

  return (
    <div>
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
              <NavLink href="/components/">Tentang Kami</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <CardTitle tag="h5"
        style={{
          marginLeft:"35vw",
          marginTop:"0.5vw"
        }}
      >
        Peta Pesabaran Virus DBD
      </CardTitle>
      <MapContainer center={center} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          // state.properties.ID
          return (
            <Polygon
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#BD0026",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#FD8D3C",
                  });
                },
                click: (e) => {},
              }}
            >
              <Popup>
                Nama Wilayah : {state.properties["Kabupaten/Kota"]} <br />
                Jumlah Kasus DBD : {state.properties["Jumlah Kasus DBD"]}
              </Popup>
            </Polygon>
          );
        })}

        {/* {dataWilayah.map((row) => (
          <Marker position={[row.posisiLat, row.posisiLong]} icon={customIcon}>
            <Popup>{row.namaWilayah}</Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}
export default MapView;
