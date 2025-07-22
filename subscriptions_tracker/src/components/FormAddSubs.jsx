const FormAddSubs = ({ setType, setPrice, type,price }) => {
    const[error, setError] = useState(false);
    const handleSubs = (e) => {
        e.preventDefault(); 
        if(price==="" || type==="" || Number(price)<=0){
            setError(true);
            return;
        }
      };
  return (
    <div className="add-subscription">
      <h3>Agregar Subscripcion</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>

        <select onChange={e => setType(e.target.value)}>
          <option value="">---Elegir---</option>
          <option value="netflix">Netflix</option>
          <option value="hbo">HBO</option>
          <option value="disney">Disney+</option>
          <option value="starPlus">Star Plus</option>
          <option value="spotify">Spotify</option>
          <option value="appleTV">Apple TV+</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  )
}
export default FormAddSubs;