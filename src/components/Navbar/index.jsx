import { useState } from "react";
import CloseIcon from "../../assets/close-icon.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import Logo from "../../assets/logo-color.png";
import MenuIcon from "../../assets/menu-icon.png";
import YoutubeIcon from "../../assets/youtube.png";
import "./style.scss";

const MenuListUI = () => (
  <>
    <a
      className="menu-list-item"
      target="_blank"
      href="https://www.vitalinea.com.mx/productos/"
    >
      Nuestros productos
    </a>
    <a
      className="menu-list-item"
      target="_blank"
      href="https://www.vitalinea.com.mx/disfruta-cuidarte/"
    >
      Disfruta cuidarte
    </a>
    <a
      className="menu-list-item"
      target="_blank"
      href="https://www.vitalinea.com.mx/blog/"
    >
      Blog
    </a>
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
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={Logo} />
      <div className="desktop-menu-list">{MenuListUI()}</div>

      <img
        className="menu-icon"
        src={MenuIcon}
        onClick={() => setMenuOpen(true)}
      />
      <div className={`mobile-menu ${menuOpen && "open"}`}>
        <img
          className="close-icon"
          src={CloseIcon}
          onClick={() => setMenuOpen(false)}
        />
        <div className="mobile-menu-list">{MenuListUI()}</div>
      </div>
    </div>
  );
};

export default Navbar;
