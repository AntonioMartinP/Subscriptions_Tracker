import { useState,useEffect } from 'react';
import { moneyFormat } from "../helpers";
const Balance = ({count,subs,spent,setSpent}) => {
    const updatedBalance = ()=>{
        const spent= subs.reduce((acc, item) => acc + Number(item.price), 0);
        setSpent(spent);
    }
    useEffect(()=>
       
        updatedBalance(),[subs]
    );

  return (
    <div className="balance">
      <h3>Presupuesto {moneyFormat(Number(count))}</h3>
      <h3>Disponible {moneyFormat(Number(count-spent))}</h3>
      <h3>Gastado {moneyFormat(Number(spent))}</h3>

    </div>
  )
}
export default Balance;
