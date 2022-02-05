import React, { Component } from "react";
import Expense from "./Components/Expense";
import AddExpense from "./Forms/AddExpense";
import FilterExpenseByYear from "./Components/FilterExpenseByYear";
import {
    AppContainer,
    ExpenseContainerDiv,
    ExpenseHeaderDiv,
} from "./Components/styledComponents";

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
            filterData: [],
        };
    }

    formatDate = (inputDate) => {
        let options = {
            // weekday: "short",
            year: "numeric",
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

    onFilterExpenseDataHandler = (expenseDateFromFilterComponent) => {
        console.log(expenseDateFromFilterComponent);
        // return this.setState({
        //     filterData: this.state.expenseData.filter((expense) => {
        //         return expenseDateFromFilterComponent == expense;
        //     }),
        // });
    };

    render() {
        console.log(this.state.filterData);
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
                    <FilterExpenseByYear
                        onFilterExpenseData={this.onFilterExpenseDataHandler}
                        expenseDateArray={this.state.expenseData.map(
                            (expense) => {
                                return expense.date;
                            }
                        )}
                    ></FilterExpenseByYear>
                    {mapExpenseState}
                </ExpenseContainerDiv>
            </AppContainer>
        );
    }
}

export default App;
