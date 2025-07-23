import { moneyFormat } from "../helpers";
const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
    const urlImage = `/image/${type}.png`;
    console.log(urlImage);

    const HandleDelete = (event) => {
        event.preventDefault();
        const answer = window.confirm(`Quieres eliminar a ${type}`);
        if (!answer) return;

        eliminarItem(id);
    }
    const HandleEdit = (event) => {
        event.preventDefault();

        editItem(id);
    }

    return (
        <div className="single-item">
            <img src={urlImage} alt="" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" onClick={HandleDelete}>Borrar</a>
            <a href="" onClick={HandleEdit}>Editar</a>


        </div>
    );
}
export default SingleItem;