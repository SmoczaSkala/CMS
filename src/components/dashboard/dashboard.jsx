import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/app.context";
import { Link } from "react-router-dom";
import "./dashboard.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Dashboard = () => {
  const { setSlider, setLogged } = useContext(AppContext);

  const [footerText, setFooterText] = useState(
    sessionStorage.getItem("footerText") || "Edytuj stopkę"
  );
  const [sliderState, setSliderState] = useState(
    sessionStorage.getItem("sliderState") === "true"
  );

  const [image1Link, setImage1Link] = useState(
    sessionStorage.getItem("image1Link") || ""
  );
  const [image2Link, setImage2Link] = useState(
    sessionStorage.getItem("image2Link") || ""
  );
  const [image3Link, setImage3Link] = useState(
    sessionStorage.getItem("image3Link") || ""
  );

  const [headerOrderText, setHeaderOrderText] = useState(
    sessionStorage.getItem("headerOrderText") || "1, 2, 3"
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

  const handleFooterTextChange = (e) => {
    const newText = e.target.value;
    setFooterText(newText);
    sessionStorage.setItem("footerText", newText);
  };

  const handleSliderToggle = () => {
    const newSliderState = !sliderState;
    setSliderState(newSliderState);

    sessionStorage.setItem("sliderState", newSliderState ? "true" : "false");
    setSlider(newSliderState);
  };

  const handleSaveImages = () => {
    sessionStorage.setItem("image1Link", image1Link);
    sessionStorage.setItem("image2Link", image2Link);
    sessionStorage.setItem("image3Link", image3Link);
  };

  const handleHeaderOrderTextChange = (e) => {
    const text = e.target.value;
    setHeaderOrderText(text);
  };

  const handleSaveHeaderOrder = () => {
    const orderArray = headerOrderText
      .split(",")
      .map((item) => parseInt(item.trim(), 10));
    sessionStorage.setItem("headerOrderText", headerOrderText);
  };

  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="Sett">
          <h2>Slider</h2>
          <button onClick={handleSliderToggle}>
            {sliderState ? "OFF" : "ON"}
          </button>
        </div>
        <div className="Sett">
          <h2>Zmień linki obrazków w sliderze</h2>
          <input
            type="text"
            placeholder="Link do obrazka 1"
            value={image1Link}
            onChange={(e) => setImage1Link(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link do obrazka 2"
            value={image2Link}
            onChange={(e) => setImage2Link(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link do obrazka 3"
            value={image3Link}
            onChange={(e) => setImage3Link(e.target.value)}
          />
        </div>
        <button onClick={handleSaveImages}>Zapisz obrazki</button>
        <div className="Sett">
          <h2>Edytuj stopkę</h2>
          <textarea value={footerText} onChange={handleFooterTextChange} />
          <button onClick={handleSaveImages}>Zapisz w Stopce</button>
        </div>
        <div className="Sett">
          <h2>Zmień kolejność nagłówków</h2>
          <input
            type="text"
            placeholder="Nowa kolejność nagłówków"
            value={headerOrderText}
            onChange={handleHeaderOrderTextChange}
          />
          <button onClick={handleSaveHeaderOrder}>Zapisz kolejność</button>
        </div>
      </div>
      <div className="Sett">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
