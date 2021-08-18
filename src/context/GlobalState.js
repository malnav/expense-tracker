import React,{ createContext, useReducer, useState } from 'react'


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
    
    const [transactions,setTransactions] = useState([
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]);

    return (
        <GlobalContext.Provider value={{transactions: transactions,setTransactions: setTransactions}}>
            {children}
        </GlobalContext.Provider>

    )
}
