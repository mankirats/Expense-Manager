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
                <ExpenseTitle>{props.title}</ExpenseTitle>
                <ExpenseDate>{props.date}</ExpenseDate>
                <ExpenseTotal>{props.total}</ExpenseTotal>
            </ExpenseDiv>
        </>
    );
}

export default Expense;
