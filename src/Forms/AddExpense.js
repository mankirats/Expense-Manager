import React, { useState } from "react";

function AddExpense(props) {
    let [expenseTitle, setExpenseTitle] = useState("");
    let [expenseTotal, setExpenseTotal] = useState("");
    let [expenseDate, setExpenseDate] = useState("");

    const submitForm = (e) => {
        console.log(`${expenseTitle} ${expenseTotal} ${expenseDate}`);
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={expenseTitle}
                    onChange={(e) => setExpenseTitle(e.target.value)}
                />

                <input
                    type="number"
                    name="total"
                    id="total"
                    value={expenseTotal}
                    onChange={(e) => setExpenseTotal(e.target.value)}
                />

                <input
                    type="date"
                    name="date"
                    id="date"
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                />

                <button type="submit">Add Expense</button>
            </form>
        </>
    );
}

export default AddExpense;
