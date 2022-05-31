import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data'
import './index.css'

function App() {

  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map((expense) => {
          return <div className='expenses' key={expense.id}>
            <ExpenseItem key={expense.id} {...expense} />
          </div>
        })
      }
    </div>
  );
}

export default App;
