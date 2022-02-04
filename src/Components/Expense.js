import React from "react";
import styled from "styled-components";

const ExpenseDiv = styled.div`
    position: relative;
    background: #393e46;
    margin: 0.2rem 0;
    /* width: 45vw; */
    padding: 0 2rem;
    min-height: calc(2rem + 2vh);
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
    display: none;
    position: absolute;
`;
const ExpenseTitle = styled.span`
    width: calc(100% / 3);
    overflow-wrap: break-word;
`;
const ExpenseTotal = styled.span`
    width: calc(100% / 3);
    text-align: center;
`;
const ExpenseDate = styled.span`
    width: calc(100% / 3);
    text-align: right;
`;

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
