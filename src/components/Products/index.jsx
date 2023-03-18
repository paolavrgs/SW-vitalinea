import AnimateIn from "../AnimateIn";
import ProductElement1 from "../../assets/product-element-1.png";
import ProductElement2 from "../../assets/product-element-2.png";
import VitalineaFruit from "../../assets/vitalinea-fruta.png";
import VitalineaGriego from "../../assets/vitalinea-griego.png";
import VitalineaNatural from "../../assets/vitalinea-natural.png";
import "./style.scss";

const Products = () => {
  return (
    <div className="products">
      <img className="product-element-1" src={ProductElement1} />
      <img className="product-element-2" src={ProductElement2} />
      <h2>La familia Vitalínea</h2>
      <div className="product-list">
        <AnimateIn>
          <div className="product">
            <img src={VitalineaGriego} />
            <span>Vitalínea Griego</span>
          </div>
        </AnimateIn>
        <AnimateIn>
          <div className="product">
            <img src={VitalineaNatural} />
            <span>Vitalínea Sin Azúcar</span>
          </div>
        </AnimateIn>
        <AnimateIn>
          <div className="product">
            <img src={VitalineaFruit} />
            <span>Vitalínea Bebible</span>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
};

export default Products;
