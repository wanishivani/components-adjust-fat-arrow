import Card from "../UI/Card";
import React from 'react';
import Expensesitem from "./Expensesitem";

import './Expense.css';
function Expense(props) 
{return(
    
    
    <Card className='expense'>
      <Expensesitem
        tittle={props.item[0].tittle}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <Expensesitem
        tittle={props.item[1].tittle}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <Expensesitem
        tittle={props.item[2].tittle}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <Expensesitem
        tittle={props.item[3].tittle}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  );
}

export default Expense;
