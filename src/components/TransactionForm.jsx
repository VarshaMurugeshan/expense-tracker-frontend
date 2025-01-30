import { useState } from "react";

const TransactionForm=(props) =>{
    const [title,seTitle]=useState('');
    const [amount,setAmount]=useState(0);
    const handleSubmit=(e) =>{
         e.preventDefault();
         props.addTransaction(title,amount)
        console.log(title,amount);
    }
    const handleTitleChange=(e) =>{
        seTitle(e.target.value)
    }
    const handleAmountChange=(e) =>{
        setAmount(e.target.value)
    }
    return(
        <div>
           <div>New Transaction</div>
           <hr />
           <form>
               <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="" id="title" onChange={handleTitleChange}/>
               </div>
               <div>
               <label htmlFor="amount">Amount</label>
               <input type="number" name="" id="amount" onChange={handleAmountChange}/>
               </div>
               <button onClick={handleSubmit}>Add Transaction</button>
           </form>
           
        </div>
    )
}
export default TransactionForm;