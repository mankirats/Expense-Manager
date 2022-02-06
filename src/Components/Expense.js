import React from "react";

import {
    ExpenseDiv,
    ExpenseEntryNumber,
    ExpenseTitle,
    ExpenseTotal,
    ExpenseDate,
} from "./styledComponents";

function Expense(props) {
    return (
        <>
            <ExpenseDiv>
                <ExpenseEntryNumber>{props.id}</ExpenseEntryNumber>
                <ExpenseDate>{props.date}</ExpenseDate>
                <ExpenseTitle>{props.title}</ExpenseTitle>
                <ExpenseTotal>{props.total}</ExpenseTotal>
            </ExpenseDiv>
        </>
    );
}

export default Expense;
