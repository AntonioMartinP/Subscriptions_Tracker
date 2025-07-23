import SingleItem from './SingleItem';
const DisplayItems = ({ subs }) => {

  return (
    <>
    <h2>Subscripciones</h2>
    <div className="subscription-list">
    {
        subs.map(item=>(
            <SingleItem  id={item.id} price={item.price} type={item.type} key={item.id} />
        ))
    }
    </div>
    </>
    
  );
}
export default DisplayItems;