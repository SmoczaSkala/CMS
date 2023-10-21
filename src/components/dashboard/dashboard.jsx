import "./dashboard.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/app.context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Slider from "../slider/slider";

const Dashboard = () => {
  const { setSlider, setLogged } = useContext(AppContext);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    setLogged(false);
    sessionStorage.removeItem("isLogged");
    navigate("/");
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
        <Slider />
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
          <Footer updatedText={footerText} />
        </div>
        <div className="Sett">
          <h2>add product</h2>
        </div>
        <div className="Sett">
          <h2>delete product</h2>
        </div>
      </div>
      <div className="Sett">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
