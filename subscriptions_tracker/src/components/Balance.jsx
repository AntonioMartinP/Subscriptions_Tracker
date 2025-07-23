import { moneyFormat } from "../helpers";
const Balance = ({count}) => {
  return (
    <div className="balance">
      <h3>Presupuesto {moneyFormat(Number(count))}</h3>
      <h3>Disponible {moneyFormat(Number(count))}</h3>
      <h3>Gastado {moneyFormat(Number(count))}</h3>

    </div>
  )
}
export default Balance;
