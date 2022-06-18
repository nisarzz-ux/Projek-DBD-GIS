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
    axios.get("http://192.168.1.11:3001/api/v1/list/dbd").then((response) => {
      console.log(response.data);
      setDataPeta(response.data);
    });
  }

  // console.log(dataPeta)
  return (
    <div className="map-body">
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

      {/* <CardTitle tag="h5"
        style={{
          marginLeft:"35vw",
          marginTop:"0.5vw"
        }}
      >
        Peta Pesabaran Virus DBD
      </CardTitle> */}
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

        {/* {dataPeta.map((row) => (
          <Marker position={[row.kabupaten_kota.lat_koordinat, row.kabupaten_kota.long_koordinat]} icon={customIcon}>
            <Popup>{row.kabupaten_kota.nama}</Popup>
          </Marker>
        ))} */}

        {dataPeta.map((v) => {
          return(
          <Marker position={[v.kabupaten_kota.long_kordinat, v.kabupaten_kota.lat_kordinat]} icon={customIcon}>
            <Popup>
              Wilayah : {v.kabupaten_kota.nama}<br/>
              Jumlah Kasus Laki : {v.jml_kasus_laki}<br/>
              Jumlah Kasus Perempuan : {v.jml_kasus_perempuan}<br/>
              Jumlah Meninggal Laki : {v.jml_meninggal_laki}<br/>
              Jumlah Meninggal Perempuan : {v.jml_meninggal_perempuan}<br/>
              Cfr Laki : {v.cfr_laki}<br/>
              Cfr Perempuan : {v.cfr_perempuan}<br/>
            </Popup>
          </Marker>
          // <CardTitle>{v.kabupaten_kota.nama}</CardTitle>
          )
        })}
      </MapContainer>
    </div>
  );
}
export default MapView;
