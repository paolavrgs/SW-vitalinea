import "./style.scss";

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
    <div className="nutritional-info">
      <h2>Información nutrimental</h2>
      <p>
        Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr
        Porciones por envase: 1
      </p>
      <div>
        <strong>Ingredientes:</strong>
        <p className="ingredients">
          Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca.
          3.5% preparado de fruta guayaba (acesulfame K y sucralosa
          (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
          lácticos.
        </p>
      </div>

      <table className="nutritional-info-table">
        {nutritionalValues.map((item) => {
          return (
            <tr>
              <td className="item-name">{item.name}</td>
              <td className="item-value">{item.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default NutritionalInfo;
