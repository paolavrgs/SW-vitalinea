import { useState } from "react";
import Logo from "../../assets/logo-color.png";
import MenuIcon from "../../assets/menu-icon.png";
import CloseIcon from "../../assets/close-icon.png";
import "./style.scss";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={Logo} />
      <img src={MenuIcon} onClick={() => setMenuOpen(true)} />
      <div className={`mobile-menu ${menuOpen && "open"}`}>
        <img
          className="close-icon"
          src={CloseIcon}
          onClick={() => setMenuOpen(false)}
        />
        <div className="mobile-menu-list">
          <div>Nuestros productos</div>
          <div>Disfruta cuidarte</div>
          <div>Blog</div>
          <div className="social-media">
            <a href="https://www.facebook.com/VitalineaMX/" target="_blank">
              <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/vitalineamx/" target="_blank">
              <img src={InstagramIcon} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCQ9QUtKWouX6TaAXyeOwb_Q"
              target="_blank"
            >
              <img src={YoutubeIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className="desktop-menu-list">
        <div>Nuestros productos</div>
        <div>Disfruta cuidarte</div>
        <div>Blog</div>
      </div>
    </div>
  );
};

export default Navbar;
