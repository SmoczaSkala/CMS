import React, { useEffect, useState } from "react";
import "./naglowek.scss";

const Naglowek = () => {
  const [headerOrder, setHeaderOrder] = useState([]);

  useEffect(() => {
    const headerOrderText = sessionStorage.getItem("headerOrderText");
    if (headerOrderText) {
      const orderArray = headerOrderText
        .split(",")
        .map((item) => parseInt(item.trim(), 10));
      setHeaderOrder(orderArray);
    }
  }, []);

  const renderHeader = (order) => {
    return order.map((position) => {
      switch (position) {
        case 1:
          return (
            <div key={position} className="naglowek1">
              <h1>
                Nowoczesny apartament z widokiem na morze w centrum miasta
              </h1>
            </div>
          );
        case 2:
          return (
            <div key={position} className="naglowek2">
              <h1>Uroczy domek wiejski z ogrodem i kominkiem na wakacje</h1>
            </div>
          );
        case 3:
          return (
            <div key={position} className="naglowek3">
              <h1>Luksusowa willa z basenem i prywatnym dostępem do plaży</h1>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return <div className="naglowki">{renderHeader(headerOrder)}</div>;
};

export default Naglowek;
