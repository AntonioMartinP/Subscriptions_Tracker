import { moneyFormat } from "../helpers";
const SingleItem=({price,type,id})=> {
    const urlImage=`/image/${type}.png`;
    console.log(urlImage);

  return (
    <div className="single-item">
      <img src={urlImage} alt="" />
        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href="">Borrar</a>
        <a href="">Editar</a>


    </div>
  ); 
}
export default SingleItem;