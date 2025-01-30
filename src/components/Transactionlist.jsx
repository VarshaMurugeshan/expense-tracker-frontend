import TransactionCard from "./TransactionCard";

const Transactionlist=(props) =>{
    console.log(props);
    return(
        <>
           <div>History</div>
           <hr />
           {props.transactions.map((transaction) =>{
            
              return <TransactionCard key={transaction.id} transaction={transaction}/>
    
           })}
           
        </>
    )
}
export default Transactionlist;