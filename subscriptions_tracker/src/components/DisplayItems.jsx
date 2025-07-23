import SingleItem from './SingleItem';
const DisplayItems = ({ subs, eliminarItem,editItem }) => {

  return (
    <>
    <h2>Subscripciones</h2>
    <div className="subscription-list">
    {
        subs.map(item=>(
            <SingleItem  id={item.id} price={item.price} type={item.type} key={item.id} eliminarItem={eliminarItem} editItem={editItem}  />
        ))
    }
    </div>
    </>
    
  );
}
export default DisplayItems;