import { useState } from 'react';
const FormAddSubs = ({ setType, setPrice, type,price, setSubs, subs }) => {
    const[error, setError] = useState(false);
    const handleSubs = (e) => {
        e.preventDefault(); 
        if(price==="" || type==="" || Number(price)<=0){
            setError(true);
            return;
        }
        setError(false);
        const data = {
            type: type,
            price: Number(price),
            id: Date.now()
      };
      setSubs([...subs, data])
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
          <option value="appleTV">Apple TV+</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} />
        <input type="submit" value="Agregar" />
      </form>
        
        {error ? <p className='error'>Por favor, completa todos los campos correctamente.</p> : null}
    </div>
  )
}
export default FormAddSubs;