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

    onSubmitFormHandler(expenseItem) {
        const formData = { ...expenseItem };
        this.setState((state) => {
            state.expenseData.push({
                id: state.expenseData[state.expenseData.length - 1].id + 1,
                title: formData.expenseTitle,
                total: formData.expenseTotal,
                date: formData.expenseDate,
            });
        });
        console.log(formData);
    }
    render() {
        return (
            <AppContainer>
                <ExpenseContainerDiv>
                    <AddExpense
                        onSubmitForm={this.onSubmitFormHandler}
                    ></AddExpense>
                    <Expense
                        key="0"
                        title="TITLE"
                        total="TOTAL"
                        date="DATE"
                    ></Expense>
                    {this.state.expenseData.map((expenseItem) => {
                        return (
                            <Expense
                                key={expenseItem.id}
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
