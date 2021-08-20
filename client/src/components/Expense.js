import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


const Expense = () => {

    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);

    const updateIncome = () => {
        const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
        return income   
    }
    const updateExpense = () => {
        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
          ).toFixed(2); 
          return expense
    }
    
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{updateIncome()}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{updateExpense()}</p>
        </div>
      </div>
    )

}

export default Expense