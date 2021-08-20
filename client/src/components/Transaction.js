import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({text, amount, id}) => {

    const {transactions} = useContext(GlobalContext)
    const {setTransactions} = useContext(GlobalContext)

    console.log(transactions)

    const deleteTransaction = (id) => {
        const newTransactionsList = transactions.filter((t) => t.id !== id)
        setTransactions(newTransactionsList)
    }

    return (
        <>
            <li className={amount<0 ? 'minus' : 'plus'}>{text}<span>{amount}</span><button onClick={()=>deleteTransaction(id)} className='delete-btn'>x</button></li>
        </>
    )
}

export default Transaction
