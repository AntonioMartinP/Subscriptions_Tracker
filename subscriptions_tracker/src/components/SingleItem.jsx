import { moneyFormat } from "../helpers";
const SingleItem=({price,type,id,eliminarItem})=> {
    const urlImage=`/image/${type}.png`;
    console.log(urlImage);

    const HandleDelete=(event)=>{
        event.preventDefault();
      eliminarItem(id);
    }

  return (
    <div className="single-item">
      <img src={urlImage} alt="" />
        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href="" onClick={HandleDelete}>Borrar</a>
        <a href="">Editar</a>


    </div>
  ); 
}
export default SingleItem;