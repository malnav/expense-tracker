import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {

    

    const {addTransactions} = useContext(GlobalContext)
    
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('')

    const AddNewTransaction = (event) => {
        
        event.preventDefault();

        if (text.trim() === '' || amount.trim() === '')
        {
            alert('Please add a text and amount');
        } else
        {
            addTransactions({text,amount})
            setText('')
            setAmount('')
        }
     
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