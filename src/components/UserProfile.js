import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import React, { useState, useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "./styles.css";
import Capturetime from "./Capturetime";
import LocationMarker from "./LocationMarker";
import SideBar from "./Sidebar";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

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
  const [showRouteWindow, setShowWindow] = useState(false);
  const [destination, setDestination] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const currentLoc = [latitude, longitude];
  //------------------------------------------------------------------
  const handleSelect = (e) => {
    setSelvalue(e);
  };
  console.log(" value set" + setvalue);

  //------------------------------------------------------------------
  // const handleSelectedRoutes = (event) => {
  //   setSaveroute(event.target.value);
  // };

  //------------------------------------------------------------------
  const addnewroutes = (event) => {
    setSaveroute((prev) => ({ ...prev, [event.target.name]: destination }));
    console.log("saveroute: ", destination);
    navigate("/findpartner", {
      state: { startpoint: currentLoc, destinationpoint: destination },
    });
  };

  //======================================/|\/|\=====================================================

  const contentStyle = {
    marginLeft: sideNavExpanded ? "250px" : "110px", // arbitrary values
    transition: "margin 0.2s ease",
  };

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
                <div>
                  <Button
                    id="addnew-routes-align-right"
                    onClick={() => setShowWindow(true)}
                  >
                    Add new route
                  </Button>
                  {showRouteWindow && (
                    <div className="map-box  shadow rounded">
                      <input
                        type="text"
                        name="start"
                        value={currentLoc}
                        autoComplete="off"
                      />
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        autoComplete="on"
                        onChange={(e) => setDestination(e.target.value)}
                      />
                      <br />
                      <Button style={{ background: "#94B49F" }} type="save">
                        Save
                      </Button>
                    </div>
                  )}
                </div>

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
          <div className="map-details">
            <LocationMarker />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
