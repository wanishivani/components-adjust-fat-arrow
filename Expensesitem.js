import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from 'react';

function Expensesitem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.date.toLocaleString()}</div>
      <h2>{props.tittle}</h2>

      <div className="expense-items_descreption">
        <div className="Expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default Expensesitem;
