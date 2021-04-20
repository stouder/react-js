import './App.css';

import React, { Component, Fragment } from 'react'
import SignUpForm from './SignUpForm';
import ExpenseForm from './ExpenseForm';
import TestFormik from './TestFormik';

class App extends Component{
  state = {
    expenses: [],
    nextExpenseId:0,
    isCreatingExpense: false

  }

  showCreatingForm = () =>{
    this.setState({isCreatingExpense:true})
  }

  createExpense = expensesInfo=>{
    this.setState({
      expenses:[{id:this.state.nextExpenseId,...expensesInfo},this.state.expenses]
    ,
    nextExpenseId:this.state.nextExpenseId + 1,
    isCreatingExpense:true
  })

alert({expensesInfo})
}

  render() {
    return (
    <Fragment>
      <h2>Create expense</h2>
      <ExpenseForm onSubmit={this.createExpense}/>
    </Fragment>
  );
    }
}

export default App;
