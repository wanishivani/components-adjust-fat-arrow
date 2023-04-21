import React from 'react';
import Expense from './components/Expense/Expense';
const App=()=>
 {
  const expense = [
    {
      id: "el",
      tittle: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 4, 20),
    },
    { id: "e2", tittle: "New TV", amount: 799.49, date: new Date(2023, 4, 20) },
    {
      id: "e3",
      tittle: "Car",
      amount: 294.67,
      date: new Date(2023, 4, 20),
    },
    { id: "e4", tittle: "New desk", amount: 450, date: new Date(2023, 4, 20) },
  ];
  return (
    <div >
<Expense item={expense}/>
    </div>
  );
}

export default App;
