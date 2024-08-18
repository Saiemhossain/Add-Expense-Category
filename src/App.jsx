/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import ExpensList from './components/ExpensList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';


function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, category: 'tour', description: 'test', amount: 100 },
    { id: 2, category: 'tour', description: 'test', amount: 600 },
    { id: 3, category: 'utility bill', description: 'test', amount: 100 },
    { id: 4, category: 'personal expense', description: 'test', amount: 100 },
  ]);

  

  const [selectCategory, setSelectCategory] = useState('');
  const filterCategory = selectCategory ? expenses.filter((expense) => expense.category === selectCategory) : expenses;


  

  return (
    <>
      <section className="mt-5">
        <ExpenseForm
          onSubmit={data =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />

        <ExpenseFilter
          onSelectedCategory={category => setSelectCategory(category)}
        />

        <ExpensList
          expenses={filterCategory}
          onDelete={id =>
            setExpenses(expenses.filter(expense => expense.id !== id))
          }
        />
      </section>
    </>
  );
}

export default App
