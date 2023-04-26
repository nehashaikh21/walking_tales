import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import React, { useState, useContext, useEffect, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "./styles.css";
import Capturetime from "./Capturetime";
import SideBar from "./Sidebar";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [setvalue, setSelvalue] = useState(""); // option data value
  const [saveroute, setSaveroute] = useState({
    Route_name: "",
    Route_Value: "",
  });

  const provider = useRef();
  const searchRef = useRef();

  const initProvider = () => {
    provider.current = new OpenStreetMapProvider({
      params: {
        "accept-language": "en",
        // countrycodes: "eu",
      },
    });
  };

  useEffect(() => {
    initProvider();
  }, []);

  const [searchResults, setSearchResults] = useState([]);
  const [endsearchResults, setEndSearchResults] = useState([]);

  const onStartInputChanged = (e) => {
    let input = e.target.value;
    provider.current.search({ query: input }).then((results) => {
      setSearchResults(() => results);
    });
  };
  const onEndInputChanged = (e) => {
    const input = e.target.value;
    provider.current.search({ query: input }).then((results) => {
      setEndSearchResults(() => results);
    });
  };

  const navigate = useNavigate();

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
    if (startsearch) {
      const lng = startsearch.x;
      const lat = startsearch.y;
      updStartLoc({ lat, lng });
      setSearchResults(() => []);
      searchRef.current.value = "";
    }
  }, [startsearch]);

  useEffect(() => {
    if (endsearch) {
      const lng = endsearch.x;
      const lat = endsearch.y;
      updEndLoc({ lat, lng });
      setSearchResults(() => []);
      searchRef.current.value = "";
    }
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

            <div className="mt-4">
              <b>Create a new route</b>
            </div>
            <form onSubmit={addnewroutes}>
              <div>
                <span>Enter Start Location:</span>
                <input
                  ref={searchRef}
                  placeholder="Search location "
                  onChange={onStartInputChanged}
                  className="m-2"
                />
              </div>
              <div className="search_result">
                {searchResults &&
                  searchResults.length !== 0 &&
                  searchResults.map((result, index) => (
                    <div
                      className="search_result-item"
                      key={index}
                      onClick={() => updStartSearch(result)}
                    >
                      <div className="search_result-icon">
                        <svg
                          title="LocationMarkerFilled"
                          viewBox="0 0 24 24"
                          className="g2 ec db"
                        >
                          <g transform="matrix( 1 0 0 1 2.524993896484375 1.0250244140625 )">
                            <path
                              fillRule="nonzero"
                              clipRule="nonzero"
                              d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z"
                              opacity="1"
                            ></path>
                          </g>
                        </svg>
                      </div>

                      <p className="search_result-label">
                        <a key={index} onClick={() => updStartSearch(result)}>
                          {result.label}
                        </a>
                      </p>
                    </div>
                  ))}
              </div>
              <div className="mt-2 mb-4">
                <span>Enter End Location:</span>
                <input
                  ref={searchRef}
                  placeholder="Search location "
                  onChange={onEndInputChanged}
                  className="m-2"
                />
              </div>
              <div className="search_result">
                {endsearchResults &&
                  endsearchResults.length !== 0 &&
                  endsearchResults.map((result, index) => (
                    <div
                      className="search_result-item"
                      key={index}
                      onClick={() => updEndSearch(result)}
                    >
                      <div className="search_result-icon">
                        <svg
                          title="LocationMarkerFilled"
                          viewBox="0 0 24 24"
                          className="g2 ec db"
                        >
                          <g transform="matrix( 1 0 0 1 2.524993896484375 1.0250244140625 )">
                            <path
                              fillRule="nonzero"
                              clipRule="nonzero"
                              d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z"
                              opacity="1"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <a key={index} onClick={() => updEndSearch(result)}>
                        <p className="search_result-label">{result.label}</p>
                      </a>
                    </div>
                  ))}
              </div>
              <div>
                <Button
                  type="submit"
                  style={{ background: "#073648" }}
                  id="find-your-mate"
                  onClick={addnewroutes}
                >
                  Save Route & Find mate
                </Button>
              </div>
            </form>
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
