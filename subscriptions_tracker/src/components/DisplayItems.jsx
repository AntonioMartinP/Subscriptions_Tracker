import SingleItem from './SingleItem';
const DisplayItems = ({ subs, eliminarItem }) => {

  return (
    <>
    <h2>Subscripciones</h2>
    <div className="subscription-list">
    {
        subs.map(item=>(
            <SingleItem  id={item.id} price={item.price} type={item.type} key={item.id} eliminarItem={eliminarItem} />
        ))
    }
    </div>
    </>
    
  );
}
export default DisplayItems;