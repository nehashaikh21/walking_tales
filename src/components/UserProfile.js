import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import React, { useState, useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "./styles.css";
import Capturetime from "./Capturetime";
import Map from "./Map";
import SideBar from "./Sidebar";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import userIcon from "./constants";

function Test({ location, search }) {
  const map = useMap();
  if (location) map.flyTo(location, 12);

  return location ? (
    <Marker
      draggable
      position={location}
      //ref={markerRef}
      icon={userIcon}
    >
      <Popup>You are here: {search}</Popup>
    </Marker>
  ) : null;
}
export default function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [setvalue, setSelvalue] = useState(""); // option data value
  const [saveroute, setSaveroute] = useState({
    Route_name: "",
    Route_Value: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  //------------------------------------------------------------------
  const handleSelect = (e) => {
    setSelvalue(e);
  };

  //------------------------------------------------------------------
  const addnewroutes = (event) => {
    navigate("/findpartner", {
      state: { startpoint: startloc, destinationpoint: endloc },
    });
  };

  //======================================/|\/|\=====================================================

  const contentStyle = {
    marginLeft: sideNavExpanded ? "250px" : "110px", // arbitrary values
    transition: "margin 0.2s ease",
  };

  const [startloc, updStartLoc] = useState();
  const [startsearch, updStartSearch] = useState();
  const [endloc, updEndLoc] = useState();
  const [endsearch, updEndSearch] = useState();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    if (startsearch)
      geocoder.geocode(startsearch, (results) => {
        //console.log(results);
        var r = results[0];
        if (r) {
          const { lat, lng } = r?.center;
          updStartLoc({ lat, lng });
          //console.log(r);
        }
      });
  }, [startsearch]);

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    if (endsearch)
      geocoder.geocode(endsearch, (results) => {
        //console.log(results);
        var r = results[0];
        if (r) {
          const { lat, lng } = r?.center;
          updEndLoc({ lat, lng });
          //console.log(r);
        }
      });
  }, [endsearch]);

  return (
    <>
      <SideBar
        setSideNavExpanded={setSideNavExpanded}
        sideNavExpanded={sideNavExpanded}
      />
      <DashboardHeader />
      <div className="container " style={contentStyle}>
        <div>
          <h2>Plan a new Workout</h2>
        </div>
        <div className="container-class-user-profile">
          <div className="activity">
            <DropdownButton
              title="Choose Activity"
              id="menu-select-activity"
              onSelect={handleSelect}
              style={{ color: "white", backgroundColor: "#073648" }}
            >
              <Dropdown.Item eventKey="Walking">Walking</Dropdown.Item>
              <Dropdown.Item eventKey="Yoga">Yoga</Dropdown.Item>
              <Dropdown.Item eventKey="Swimming">Swimming</Dropdown.Item>
              <Dropdown.Item eventKey="Hiking">Hiking</Dropdown.Item>
              <Dropdown.Item eventKey="Cycling">Cycling</Dropdown.Item>
            </DropdownButton>
            <br />
            <div>
              <span>Select Date :</span>
            </div>
            <div>
              <span>
                Select Start Time : <Capturetime />
              </span>
            </div>
            <div className="routes-activity-map">
              <div className="row">
                <span>Enter Start Location:</span>
                <input
                  placeholder="Enter location Address"
                  onChange={(e) => updStartSearch(e.target.value)}
                />
                <span>Enter End Location:</span>
                <input
                  placeholder="Enter location Address"
                  onChange={(e) => updEndSearch(e.target.value)}
                />
                <div>
                  <Button
                    type="button"
                    style={{ background: "#073648" }}
                    id="find-your-mate"
                    onClick={addnewroutes}
                  >
                    Find mate
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <h3>Welcome,{user.username}</h3> */}
          {/*<div className="map-details">
            <MapContainer
              center={startloc || { lat: 50, lng: 30 }}
              zoom={startloc ? 12 : 3}
              zoomControl={false}
              style={{ height: "80vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Test location={startloc} search={startsearch} />
            </MapContainer>
            {startloc?.lat},{startloc?.lng}
  </div>*/}
        </div>
      </div>
      <Footer />
    </>
  );
}
