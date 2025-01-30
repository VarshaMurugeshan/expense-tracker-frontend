import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactionlist from "./components/transactionlist";
import axios from "axios";

const App=() =>{
const[transactions,setTransaction]=useState([]);

useEffect(()=>{
  // console.log("Hi");
  const fetchData=async()=>{
  const data=await axios.get("https://expense-tracker-exek.onrender.com/api/expenses");
  setTransaction(response.data);
  };
  fetchData();
},[]);


  const addTransaction=(title,amount) =>{
    console.log('Add =>',title,amount);
    const newTxn={
      id:transactions.length+1,
      title:title,
      amount: +amount
    }
    setTransaction([...transactions,newTxn])
  };
  return(
    <>
    <h1>Expense Tracker</h1>
    <Transactionlist transactions={transactions} />
    <TransactionForm addTransaction={addTransaction}/>
    </>
  );
};
export default App;