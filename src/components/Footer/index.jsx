import "./style.scss";
import LogoDanone from "../../assets/logo-danone-footer.png";
import LogoGrey from "../../assets/logo-grey.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mobile-logos">
        <img src={LogoDanone} />
        <img src={LogoGrey} />
      </div>
      <div className="footer-left">
        <img src={LogoDanone} />
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">Términos y condiciones</a>
            <a href="#">Políticas de privacidad</a>
            <a href="#">Aviso de privacidad</a>
          </div>
          <p className="footer-copyright">
            Danone de México 2017 ©. Todos los derechos reservados 2017
          </p>
        </div>
      </div>
      <div className="footer-right">
        <img src={LogoGrey} />
      </div>
    </div>
  );
};

export default Footer;
