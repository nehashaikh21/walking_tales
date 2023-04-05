import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./context/UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Header />
      <br />
      <Banner />
      <Activity />
      <Footer />
    </div>
  );
}

export default Home;
