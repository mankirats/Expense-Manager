import React from "react";
import styled from "styled-components";

const ExpenseDiv = styled.div`
    position: relative;

    background: #262626;
    margin: 0.2rem 0;
    width: 45vw;
    padding: 0 2rem;
    height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const ExpenseEntryNumber = styled.span`
    width: 25px;
    height: 25px;
    left: -8px;
    background: #f0a500;
    border-radius: 25px;
    color: #082032;
    text-align: center;
    position: absolute;
`;
const ExpenseTitle = styled.span``;
const ExpenseTotal = styled.span``;
const ExpenseDate = styled.span``;
function Expense(props) {
    return (
        <>
            <ExpenseDiv>
                <ExpenseEntryNumber>{props.id}</ExpenseEntryNumber>
                <ExpenseTitle>{props.title}</ExpenseTitle>
                <ExpenseTotal>{props.total}</ExpenseTotal>
                <ExpenseDate>{props.date}</ExpenseDate>
            </ExpenseDiv>
        </>
    );
}

export default Expense;
