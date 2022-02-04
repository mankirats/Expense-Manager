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
`;

const ExpenseHeaderDiv = styled.div`
    position: relative;
    background: #222831;
    margin: 0.5rem 0;
    /* width: 45vw; */
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
                    id: 0,
                    title: "Nice",
                    total: "Hello",
                    date: "Hello",
                },
                {
                    id: 1,
                    title: "Nice1",
                    total: "Hell1",
                    date: "Hello1",
                },
            ],
        };
    }

    onSubmitFormHandler = (expenseItem) => {
        const formData = { ...expenseItem };
        const newExpense = {
            id:
                this.state.expenseData[this.state.expenseData.length - 1].id +
                1,
            title: formData.expenseTitle,
            total: formData.expenseTotal,
            date: formData.expenseDate,
        };
        return this.setState({
            expenseData: [...this.state.expenseData, newExpense],
        });
    };
    render() {
        console.log(this.state.expenseData);
        return (
            <AppContainer>
                <ExpenseContainerDiv>
                    <AddExpense
                        onSubmitForm={this.onSubmitFormHandler}
                    ></AddExpense>
                    <ExpenseHeaderDiv>
                        <span>TITLE</span>
                        <span>TOTAL</span>
                        <span>DATE</span>
                    </ExpenseHeaderDiv>
                    {this.state.expenseData.map((expenseItem) => {
                        return (
                            <Expense
                                key={expenseItem.id}
                                id={expenseItem.id}
                                title={expenseItem.title}
                                total={expenseItem.total}
                                date={expenseItem.date}
                            />
                        );
                    })}
                </ExpenseContainerDiv>
            </AppContainer>
        );
    }
}

export default App;
