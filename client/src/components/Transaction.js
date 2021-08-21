import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({text, amount, id}) => {

    const {transactions, deleteTransaction} = useContext(GlobalContext)

    return (
        <>
            <li className={amount<0 ? 'minus' : 'plus'}>{text}<span>{amount}</span><button onClick={()=>deleteTransaction(id)} className='delete-btn'>x</button></li>
        </>
    )
}

export default Transaction
