import React,{useState} from "react";
import "./ExpenseItem.css";
// import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    //const [title,setTitle] = useState(props.title); //useState function wnats a default state value, with it we craete a special kind of variable where changes will lead to calling of the function again , hence we give an initial value . it give saccess to ht special kind of variable it also returns a function , which we can call to assign a new value to the variable. it returns an array of the both

    // const clickHandler = ()=>{
    //     setTitle("Updated");
    //     console.log(title);
    // }
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> useless state */}
      </Card>
    );
}
export default ExpenseItem;