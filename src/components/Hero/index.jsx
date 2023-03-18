import "./style.scss";
import ProductImage from "../../assets/product-image.png";
import NoSugarBadge from "../../assets/no-sugar-ribbon.png";
import FMDBadge from "../../assets/fmd-interior.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={ProductImage} className="hero-image" />
      <div className="hero-content">
        <div className="tabs-container">
          <p>Sabor: &nbsp;</p>
          <div className="tabs">
            <div className="tab active">
              <span>Fresa</span>
            </div>
            <div className="tab">
              <span>Guayaba</span>
            </div>
            <div className="tab">
              <span>Toronja</span>
            </div>
          </div>
        </div>
        <h1>Vitalínea® Bebible Fresa 217 gr.</h1>
        <p>
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
          opción si eres de las personas que siempre están activas y quieren
          probar algo sano, rico y práctico.
        </p>
        <div className="hero-button">Comprar en Walmart</div>
        <div className="hero-badges">
          <img src={FMDBadge} />
          <img src={NoSugarBadge} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
