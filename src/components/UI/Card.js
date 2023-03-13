import "./Card.css";
// import "./ExpenseItem.css";
// import "./Expense.css";

function Card(props){
    const classes = 'card'+" "+ props.className ; //Space needed
    return (
        <div className={classes}>{props.children}</div>
    );
}
export default Card;