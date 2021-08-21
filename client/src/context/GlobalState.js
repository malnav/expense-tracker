import React,{ createContext, useState } from 'react'
import axios from 'axios'


// Create Global State
// const transactions = [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//     ]    

// Create Global Context
export const GlobalContext = createContext(null)

export const GlobalProvider = ({children}) => {
    
    const [transactions,setTransactions] = useState([]);

    const getTransactions = async () =>{
        const res = await axios.get('/api/v1/transactions')
        setTransactions(res.data.data)
    }

    const addTransactions = async (transaction) =>{
        const res = await axios.post('/api/v1/transactions',transaction)
        const newTransactionList = [...transactions,res.data.data]
        setTransactions(newTransactionList)
    }

    const deleteTransaction = async (id) =>{
        await axios.delete(`/api/v1/transactions/${id}`)
        const newTransactionList = transactions.filter((t) => (t._id !== id))
        setTransactions(newTransactionList)
    }

    return (
        <GlobalContext.Provider value={{transactions,getTransactions,deleteTransaction,addTransactions}}>
            {children}
        </GlobalContext.Provider>

    )
}
