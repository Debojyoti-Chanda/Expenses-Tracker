import "./ExpensesList.css" 
import React from "react";
import ExpenseItem from "./ExpenseItem";

 const ExpensesList = (props)=>{

    let expensesContent = <h2 className="expenses-list__fallback">No Data Found!!</h2>
    if(props.items.length>0){
        expensesContent = props.items.map( 
            (exp)=>{
                return <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>
            })
    }
    return (
        <ul className="expenses-list">
            {expensesContent};
        </ul>
    );
 }
export default ExpensesList;