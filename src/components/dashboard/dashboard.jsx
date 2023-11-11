import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/app.context";
import { Link } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  const { slider, setSlider, setLogged } = useContext(AppContext);

  const [footerText, setFooterText] = useState(
    sessionStorage.getItem("footerText") || "Edytuj stopkę"
  );
  const [imageLinks, setImageLinks] = useState({
    image1Link: sessionStorage.getItem("image1Link") || "",
    image2Link: sessionStorage.getItem("image2Link") || "",
    image3Link: sessionStorage.getItem("image3Link") || "",
  });

  const [headerOrderText, setHeaderOrderText] = useState(
    sessionStorage.getItem("headerOrderText") || ""
  );

  const handleLogout = () => {
    setLogged(false);
    sessionStorage.removeItem("isLogged");
    window.location.href = "/";
  };

  useEffect(() => {
    const isLogged = sessionStorage.getItem("isLogged");
    if (isLogged === "true") {
      setLogged(true);
    }
  }, [setLogged]);

  const handleSaveData = (key, value) => {
    sessionStorage.setItem(key, value);
  };

  const handleClick = () => {
    const newSliderState = !slider;
    setSlider(newSliderState);
    handleSaveData("sliderState", newSliderState ? "true" : "false");
  };
  const handleSaveImageLinks = () => {
    for (let num = 1; num <= 3; num++) {
      const link = imageLinks[`image${num}Link`] || "";
      handleSaveData(`image${num}Link`, link);
    }
  };

  const handleSaveHeaderOrder = () => {
    handleSaveData("headerOrderText", headerOrderText);
  };

  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="Sett">
          <h2>Slider</h2>
          <button onClick={handleClick}>{slider ? "ON" : "OFF"}</button>
        </div>
        <div className="Sett">
          <h2>Zmień linki obrazków w sliderze</h2>
          {[1, 2, 3].map((num) => (
            <input
              key={num}
              type="text"
              placeholder={`Link do obrazka ${num}`}
              value={imageLinks[`image${num}Link`]}
              onChange={(e) => {
                const newLinks = {
                  ...imageLinks,
                  [`image${num}Link`]: e.target.value,
                };
                setImageLinks(newLinks);
              }}
            />
          ))}
        </div>
        <button onClick={handleSaveImageLinks}>
          Zapisz obrazki w sliderze
        </button>
        <div className="Sett">
          <h2>Edytuj stopkę</h2>
          <textarea
            value={footerText}
            onChange={(e) => {
              setFooterText(e.target.value);
              handleSaveData("footerText", e.target.value);
            }}
          />
          <button onClick={handleSaveData.bind(null, "footerText", footerText)}>
            Zapisz w Stopce
          </button>
        </div>
        <div className="Sett">
          <h2>Zarządzaj kolejnością nagłówków</h2>
          <input
            type="text"
            placeholder="Kolejność (np. 1, 2, 3)"
            value={headerOrderText}
            onChange={(e) => setHeaderOrderText(e.target.value)}
          />
          <button onClick={handleSaveHeaderOrder}>
            Zapisz kolejność nagłówków
          </button>
        </div>
      </div>
      <div className="Sett">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
