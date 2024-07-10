import { useState } from "react";
import "./App.css";
import Header from "./asset/components/Header";
import MainBody from "./asset/components/Body";
import Footer from "./asset/components/Footer";
import Products from "./asset/pages/Product";
import Shop from "./asset/pages/Shop";

function App() {
  return (
    <>
      <Header />
      <MainBody />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
