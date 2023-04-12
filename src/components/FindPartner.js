import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import "./styles.css";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function FindPartner() {
  const { user, setUser } = useContext(UserContext);

  const [checked, setChecked] = useState(true);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function findUsers() {
      console.log(process.env.REACT_APP_SERVER + "/users");
      await axios
        .get(process.env.REACT_APP_SERVER + "/users")
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => console.log(error));
    }
    findUsers();
  }, []);
  // console.log("----------", users);

  return (
    <>
      <Header />
      <div className="container">
        {/* <h5>Hello,{user.username}</h5> */}

        <div className="map-details">
          <Map />
        </div>
        <br />
        <br />
        <div>
          {users.data &&
            users.data.map((alluser) => (
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Table className="d-inline" style={{ minWidth: "700px" }}>
                    <tbody>
                      <tr>
                        <td style={{ maxWidth: "200px", minWidth: "600px" }}>
                          <div
                            className="col-md-6"
                            style={{ color: "#073648" }}
                          >
                            {alluser.First_name} {alluser.Last_name}{" "}
                          </div>
                        </td>
                        <td style={{ maxWidth: "50px", minWidth: "50px" }}>
                          <svg
                            style={{ color: "#073648" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            class="bi bi-person-plus-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                              fill-rule="evenodd"
                              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                            />
                          </svg>{" "}
                        </td>
                        <td>
                          {" "}
                          <Link to="/chat">
                            <svg
                              style={{ color: "#073648" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="26"
                              fill="currentColor"
                              class="bi bi-chat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
