import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {

    

    const {transactions} = useContext(GlobalContext)
    const {setTransactions} = useContext(GlobalContext)
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('')

    const AddNewTransaction = (event) => {
        
        event.preventDefault();

        if (text.trim() === '' || amount.trim() === '')
        {
            alert('Please add a text and amount');
        } else
        {
            const transaction = {
              id: generateID(),
              text: text,
              amount: +amount
            }
            console.log(transaction)
            const newTransactionsList = [...transactions,transaction]
            console.log(newTransactionsList)
            setTransactions(newTransactionsList)
            setText('')
            setAmount('')
             
        }
     
    }

    // Generate random ID
    function generateID() {
    return Math.floor(Math.random() * 100000000);
  }



    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={AddNewTransaction}>
                <div className="form-control">
                    <label>Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                    <label>Amount <br />
                        (negative - expense, positive - income)</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
export default AddTransaction