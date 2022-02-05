import React, { Component } from "react";
import Expense from "./Components/Expense";
import styled from "styled-components";
import AddExpense from "./Forms/AddExpense";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ExpenseContainerDiv = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    max-width: 55vw;
`;

const ExpenseHeaderDiv = styled.div`
    position: relative;
    background: #222831;
    margin: 0.5rem 0;
    padding: 0 2rem;
    height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    letter-spacing: 1px;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseData: [
                {
                    id: "e1",
                    title: "Toilet Paper",
                    total: 94.12,
                    date: "2020,1,22",
                },
                {
                    id: "e2",
                    title: "New TV",
                    total: 799.49,
                    date: "2019,4,12",
                },
                {
                    id: "e3",
                    title: "Car Insurance",
                    total: 294.67,
                    date: "2020, 2, 28",
                },
                {
                    id: "e4",
                    title: "New Desk (Wooden)",
                    total: 450,
                    date: "2021, 5, 12",
                },
            ],
        };
    }

    formatDate = (inputDate) => {
        let options = {
            weekday: "short",
            // year: "numeric",
            month: "short",
            day: "numeric",
        };
        let dateToFormat = new Date(inputDate);

        return dateToFormat.toLocaleDateString("en-US", options);
    };

    onSubmitFormHandler = (expenseItem) => {
        const formData = { ...expenseItem };
        this.formatDate(formData.expenseDate);
        const newExpense = {
            id:
                this.state.expenseData[this.state.expenseData.length - 1].id +
                1,
            title: formData.expenseTitle,
            total: formData.expenseTotal,
            date: this.formatDate(formData.expenseDate),
        };
        return this.setState({
            expenseData: [...this.state.expenseData, newExpense],
        });
    };
    render() {
        let mapExpenseState = this.state.expenseData.map((expenseItem) => {
            return (
                <Expense
                    key={expenseItem.id}
                    id={expenseItem.id}
                    title={
                        expenseItem.title
                        //     > 15
                        //         ? expenseItem.title.slice(0, 10)
                        //         : expenseItem.title
                    }
                    date={this.formatDate(expenseItem.date)}
                    total={expenseItem.total}
                />
            );
        });

        return (
            <AppContainer>
                <ExpenseContainerDiv>
                    <AddExpense
                        onSubmitForm={this.onSubmitFormHandler}
                    ></AddExpense>
                    <ExpenseHeaderDiv>
                        <span>TITLE</span>
                        <span>DATE</span>
                        <span>TOTAL</span>
                    </ExpenseHeaderDiv>
                    {mapExpenseState}
                </ExpenseContainerDiv>
            </AppContainer>
        );
    }
}

export default App;
