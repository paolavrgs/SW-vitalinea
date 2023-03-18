import VitalineaGriego from "../../assets/vitalinea-griego.png";
import VitalineaNatural from "../../assets/vitalinea-natural.png";
import VitalineaFruit from "../../assets/vitalinea-fruta.png";
import "./style.scss";

const Products = () => {
  return (
    <div className="products">
      <h2>La familia Vitalínea</h2>
      <div className="product-list">
        <div className="product">
          <img src={VitalineaGriego} />
          <span>Vitalínea Griego</span>
        </div>
        <div className="product">
          <img src={VitalineaNatural} />
          <span>Vitalínea Sin Azúcar</span>
        </div>
        <div className="product">
          <img src={VitalineaFruit} />
          <span>Vitalínea Bebible</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
