import React from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props){
    const [initYearVal , setYearVal] = React.useState("2020");

    const yearHandler = (yearVal) =>{
        // console.log(yearVal);
        setYearVal(yearVal);
    };
    const filteredExpenses = props.expens.filter((exp) => {   
        return exp.date.getFullYear() === parseInt(initYearVal);
    })

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={initYearVal} onYearSelect={yearHandler}/>
                {/* {props.expens.map( (exp)=>{
                    return <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>
                }
                )} */}
                {/* {filteredExpenses.length === 0 ? <p>No Data Found</p> :  filteredExpenses.map( 
                    (exp)=>{
                        return <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>
                    }
                )} */}

                {/* { filteredExpenses.map( 
                    (exp)=>{
                        return <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>
                    }
                )} */}
                <ExpensesChart expenses={filteredExpenses}/>

                <ExpensesList items={filteredExpenses}></ExpensesList>

                
                {/* <ExpenseItem
                    title={(props.expens)[0].title}
                    amount={(props.expens)[0].amount}
                    date={(props.expens)[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={(props.expens)[1].title}
                    amount={(props.expens)[1].amount}
                    date={(props.expens)[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={(props.expens)[2].title}
                    amount={(props.expens)[2].amount}
                    date={(props.expens)[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={(props.expens)[3].title}
                    amount={(props.expens)[3].amount}
                    date={(props.expens)[3].date}
                ></ExpenseItem> */}
            </Card>
        </div>
        
    );
}
export default Expense;