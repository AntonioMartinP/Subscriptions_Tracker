import { useState } from 'react';
const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs, editId, setEditId,spent,count }) => {
    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    const handleSubs = (e) => {
        e.preventDefault();
        if (price === "" || type === "" || Number(price) <= 0) {
            setError(true);
            return;
        }
        if(count-spent<Number(price)){
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false);
        if (editId !== 0) {
            setEditId(0);
            const updatedSubs = subs.map(sub => {
                if (sub.id === editId) {
                    return {
                        ...sub,
                        type: type,
                        price: Number(price)
                    };
                }
                return sub;
            });
            setSubs(updatedSubs);
        } else {
            const data = {
                type: type,
                price: Number(price),
                id: Date.now()
            };
            setSubs([...subs, data]);
        }
        setType("");
        setPrice("");
        console.log(subs);
    }; 

    return (
        <div className="add-subscription">
            <h3>Agregar Subscripcion</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">---Elegir---</option>
                    <option value="netflix">Netflix</option>
                    <option value="hbo">HBO</option>
                    <option value="disney">Disney+</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="spotify">Spotify</option>
                    <option value="appletv">Apple TV+</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} />
                {editId !== 0 ? <input type="submit" value="Editar" /> : <input type="submit" value="Agregar" />}
            </form>
            {error ? <p className='error'>Por favor, completa todos los campos correctamente.</p> : null}
            {errorMoney ? <p className='error'>No tienes saldo para nuevas subscripciones.</p> : null}
        </div>
    );
}
export default FormAddSubs;