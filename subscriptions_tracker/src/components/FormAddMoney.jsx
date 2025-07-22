import { useState } from 'react';
const FormAddMoney = ({setCount, setIsValid}) => {
    const[input, setInput]= useState("");
    const[error,setError]= useState(false);

    const handleForm = (e) => {
       e.preventDefault();
        if (input.trim() === "" || Number(input)<= 0 ) {
            setError(true);
            return;
        }else{
            setError(false);
            setCount(Number(input));
            setIsValid(true);
        }
        console.log(`Money added: ${input}`);
        setInput("");
    };
  return (
    <div className="form-add-money">
      <h2>Add Money</h2>
      <form onSubmit={handleForm}>
        <input type="number" placeholder="300 $" onChange={e => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <p className='error'>{error?"Please enter a valid amount.":null}</p>
    </div>
  )
}
export default FormAddMoney;