import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import Expense from './components/Expense';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
      <div className="container">
        <Header />
        <GlobalProvider>
          <Balance />
          <Expense />
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>
      
      </div>
    
  );
}

export default App;
