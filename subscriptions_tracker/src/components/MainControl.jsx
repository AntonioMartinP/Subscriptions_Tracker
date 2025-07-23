import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs"; 
import DisplayItems from "./DisplayItems";

const MainControl = ({count}) => {
    const [subs, setSubs] = useState([]);
    const [type, setType] = useState(""); 
    const [price, setPrice] = useState("");

    const eliminarItem = (id) => {
        const newList = subs.filter((item) => item.id !== id);
        setSubs(newList);
    }

  return (
    <>
    <div className="main-form">
      <Balance count={count} />
      <FormAddSubs 
      setType={setType} 
      setPrice={setPrice}
      type={type}
      price={price}
      setSubs={setSubs}
      subs={subs}
      />
    </div>
    <DisplayItems subs={subs} eliminarItem={eliminarItem} />
    </>
  )
}
export default MainControl;