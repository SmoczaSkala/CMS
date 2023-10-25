import React from "react";
import Header from "../../components/header/header";
import Content from "../../components/content/content";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider";
import { useContext } from "react";
import { AppContext } from "../../components/context/app.context";
import Naglowek from "../../components/naglowki/naglowek";

const Home = () => {
  const { slider } = useContext(AppContext);

  return (
    <>
      <Header />
      {slider && <Slider />}
      <Content />
      <Naglowek />
      <Footer />
    </>
  );
};

export default Home;
