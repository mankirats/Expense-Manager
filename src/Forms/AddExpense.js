import React from "react";

function addExpense(props) {
    return (
        <>
            <form action="post">
                <input type="text" name="title" id="title" />
                <input type="number" name="total" id="total" />
                <input type="date" name="date" id="date" />
                <button type="submit">Add Expense</button>
            </form>
        </>
    );
}

export default addExpense;
