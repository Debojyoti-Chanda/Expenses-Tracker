
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import Display from "./Display";
import React from "react";

const NewExpense =(props)=>{
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    const [newExpD,setNewExpD] = React.useState(false);

    const dHandler = (evt)=>{
        setNewExpD(true);
    }
    const cHandler =(evt)=>{
        setNewExpD(false);
    }

    let disp = <button type="button" onClick={dHandler}>Add New Expense</button>        //<Display onD={dHandler}/>
    if(newExpD){
        disp = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={cHandler}/>
    }else{
        disp = <button type="button" onClick={dHandler}>Add New Expense</button> //<Display onD={dHandler}/>;
    }

    return (
        <div className="new-expense">

            {disp}
            
            {/* <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/> */}
        </div>
    );
}
export default NewExpense;