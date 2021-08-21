import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"



const TransactionList = () => {
    
    const {transactions,getTransactions} = useContext(GlobalContext)

    useEffect(() => {
        getTransactions()
    }, [])     // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map((t) => (<Transaction key={t._id} text={t.text} amount={t.amount} id={t._id} />))
                }
                
            </ul>
        </>
    )
}

export default TransactionList