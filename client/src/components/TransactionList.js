import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = () => {
    
    const {transactions} = useContext(GlobalContext)
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map((t) => (<Transaction key={t.id} text={t.text} amount={t.amount} id={t.id} />))
                }
                
            </ul>
        </>
    )
}

export default TransactionList