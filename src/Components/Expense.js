import React from "react";
import styled from "styled-components";

const ExpenseDiv = styled.div`
    position: relative;
    background: #393e46;
    margin: 0.2rem 0;
    /* width: 45vw; */
    padding: 0 2rem;
    height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ExpenseEntryNumber = styled.span`
    width: 30px;
    height: 30px;
    left: -8px;
    background: #e16428;
    border-radius: 30px;
    color: #082032;
    font-weight: bold;
    display: grid;
    font-size: 0.9rem;
    /* text-align: center; */
    place-items: center;
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
