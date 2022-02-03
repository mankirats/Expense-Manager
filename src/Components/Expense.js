import React from "react";
import styled from "styled-components";

const ExpenseDiv = styled.div`
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
const ExpenseTitle = styled.span``;
const ExpenseTotal = styled.span``;
const ExpenseDate = styled.span``;
function Expense(props) {
    return (
        <>
            <ExpenseDiv>
                <ExpenseTitle>{props.title}</ExpenseTitle>
                <ExpenseTotal>{props.total}</ExpenseTotal>
                <ExpenseDate>{props.date}</ExpenseDate>
            </ExpenseDiv>
        </>
    );
}

export default Expense;
