import React, { useState } from "react";

function AddExpense(props) {
    const [expenseItem, setExpenseItem] = useState({
        expenseTitle: "",
        expenseTotal: "",
        expenseDate: "",
    });

    const submitForm = (e) => {
        console.log(
            `${expenseItem.expenseTitle} ${expenseItem.expenseTotal} ${expenseItem.expenseDate}`
        );
        props.submitForm(expenseItem);
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={expenseItem.expenseTitle}
                    onChange={(e) =>
                        setExpenseItem((prevState) => ({
                            ...prevState,
                            expenseTitle: e.target.value,
                        }))
                    }
                />

                <input
                    type="number"
                    name="total"
                    id="total"
                    value={expenseItem.expenseTotal}
                    onChange={(e) =>
                        setExpenseItem((prevState) => ({
                            ...prevState,
                            expenseTotal: e.target.value,
                        }))
                    }
                />

                <input
                    type="date"
                    name="date"
                    id="date"
                    value={expenseItem.expenseDate}
                    onChange={(e) =>
                        setExpenseItem((prevState) => ({
                            ...prevState,
                            expenseDate: e.target.value,
                        }))
                    }
                />

                <button type="submit">Add Expense</button>
            </form>
        </>
    );
}

export default AddExpense;
