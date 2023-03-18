import { useState } from "react";
import "./style.scss";
import ArrowDownIcon from "../../assets/arrow-down-icon.png";
import FMDBadge from "../../assets/fmd-interior.png";
import HeroElement from "../../assets/hero-element-1.png";
import HeroElementMobile from "../../assets/hero-element-mobile.png";
import NoSugarBadge from "../../assets/no-sugar-ribbon.png";
import ProductImage from "../../assets/product-image.png";
import AnimateIn from "../AnimateIn";

const tabs = [
  {
    slug: "strawberry",
    category: "Fresa",
    productName: "Vitalínea® Bebible Fresa 217 gr.",
    productDescription:
      "¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.",
  },
  {
    slug: "guava",
    category: "Guayaba",
    productName: "Vitalínea® Bebible Guayaba 217 gr.",
    productDescription:
      "¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico. Guayaba.",
  },
  {
    slug: "grapefruit",
    category: "Toronja",
    productName: "Vitalínea® Bebible Toronja 217 gr.",
    productDescription:
      "¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico. Toronja.",
  },
];

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleScrollDown = () => {
    const element = document.getElementsByClassName("nutritional-container")[0];
    window.scrollTo({ left: 0, top: element.clientHeight, behavior: "smooth" });
  };

  return (
    <div className="hero">
      <img className="hero-element" src={HeroElement} />
      <img className="hero-element-mobile" src={HeroElementMobile} />
      <img src={ProductImage} className="hero-image" />
      <div className="hero-content">
        <div className="tabs-container">
          <p className="tab-name">Sabor: &nbsp;</p>
          <div className="tabs">
            {tabs.map((tab) => {
              return (
                <div
                  key={tab.slug}
                  className={`tab ${selectedTab.slug === tab.slug && "active"}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  <span>{tab.category}</span>
                </div>
              );
            })}
          </div>
        </div>
        <AnimateIn>
          <h1 className="product-title">{selectedTab.productName}</h1>
          <p className="product-description">
            {selectedTab.productDescription}
          </p>
        </AnimateIn>
        <a
          className="hero-button"
          href="https://super.walmart.com.mx/ip/Yoghurt-bebible-Danone-Vitalinea-fresa-sin-azucar-217-g/00750103239864"
          target="_blank"
        >
          Comprar en Walmart
        </a>
        <div className="hero-badges">
          <img src={FMDBadge} />
          <img src={NoSugarBadge} />
        </div>
      </div>
      <img
        src={ArrowDownIcon}
        className="arrow-down-icon"
        onClick={handleScrollDown}
      />
    </div>
  );
};

export default Hero;
