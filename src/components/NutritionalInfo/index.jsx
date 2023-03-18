import AnimateIn from "../AnimateIn";
import "./style.scss";
import NutritionalElement1 from "../../assets/nutritional-element-1.png";
import NutritionalElement2 from "../../assets/nutritional-element-2.png";
import NutritionalElement3 from "../../assets/nutritional-element-3.png";
import NutritionalElement4 from "../../assets/nutritional-element-4.png";

const nutritionalValues = [
  {
    name: "Contenido enérgetico kj/kcal",
    value: "413,2/97,9",
  },
  {
    name: "Proteínas (g)",
    value: "5.3",
  },
  {
    name: "Grasas (lípidos) (g)",
    value: "2.1",
  },
  {
    name: "Grasas saturadas (g)",
    value: "1.4",
  },
  {
    name: "Carbohidratos (Hidratos de carbono) (g)",
    value: "12.4",
  },
  {
    name: "Azúcares (g)",
    value: "7.7",
  },
  {
    name: "Azúcares añadidos (g)",
    value: "0.1",
  },
  {
    name: "Fibra dietética (g)",
    value: "0.0",
  },
  {
    name: "Sodio (mg)",
    value: "92.7",
  },
  {
    name: "Calcio (mg)",
    value: "199.6",
  },
  {
    name: "%VNR*",
    value: "22",
  },
];

const NutritionalInfo = () => {
  return (
    <div className="nutritional-container">
      <img className="nutritional-element-1" src={NutritionalElement1} />
      <img className="nutritional-element-2" src={NutritionalElement2} />
      <img className="nutritional-element-3" src={NutritionalElement3} />
      <img className="nutritional-element-4" src={NutritionalElement4} />
      <AnimateIn>
        <h2>Información nutrimental</h2>
      </AnimateIn>
      <AnimateIn>
        <div className="nutritional-columns">
          <div className="nutritional-info">
            <p className="description">
              Vitalínea® Bebible Guayaba 217gr
              <br />
              Valor promedio por porción de 217gr
              <br />
              Porciones por envase: 1
            </p>
            <div>
              <strong className="ingredients-title">Ingredientes:</strong>
              <p className="ingredients-description">
                Leche descremada pasteurizada y/o reconstituida pasteurizada de
                vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
                (27.2mg/100g)), crema, almidón modificado, maltodextrina y
                cultivos lácticos.
              </p>
            </div>
          </div>

          <table className="nutritional-info-table">
            <tbody>
              {nutritionalValues.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="item-name">{item.name}</td>
                    <td className="item-value">{item.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AnimateIn>
    </div>
  );
};

export default NutritionalInfo;
