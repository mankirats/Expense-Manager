import React, { Component } from "react";
import Expense from "./Components/Expense";
import AddExpense from "./Forms/AddExpense";
import FilterExpenseByYear from "./Components/FilterExpenseByYear";
import { extractExpenseYear, formatDate } from "./commonFunction/commonFunc";
import HeaderWithTotal from "./Components/HeaderWithTotal";
import {
    AppContainer,
    ExpenseContainerDiv,
    ExpenseHeaderDiv,
    DisplayExpenseFormButton,
    DisplayExpenseFormContainer,
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
            filterYear: 0,
            displayAddExpense: false,
        };
    }
    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch(
            "http://localhost:5000/api/v1/allExpenses"
        );
        const data = await response.json();
        console.log(data);
        this.setState({ expenseData: data });
    }
    filterData = [];

    onSubmitFormHandler = (expenseItem) => {
        const formData = expenseItem;
        formatDate(formData.expenseDate);
        const newExpense = {
            id:
                this.state.expenseData[this.state.expenseData.length - 1].id +
                1,
            title: formData.expenseTitle,
            total: formData.expenseTotal,
            date: formatDate(formData.expenseDate),
        };
        return this.setState((prevState) => {
            return {
                ...prevState,
                expenseData: [...this.state.expenseData, newExpense],
                // displayAddExpense: !this.state.displayAddExpense,
            };
        });
    };

    setFilterYearHandler = (selectedYear) => {
        return this.setState((prevState) => {
            return {
                ...prevState,
                filterYear: selectedYear,
            };
        });
    };

    displayAddExpense = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayAddExpense: !this.state.displayAddExpense,
            };
        });
    };

    render() {
        const filterData = this.state.expenseData.filter((expense) => {
            return extractExpenseYear(expense.date) == this.state.filterYear;
        });
        let dataToDisplay =
            filterData.length > 0 ? filterData : this.state.expenseData;
        let mapExpenseState = dataToDisplay.map((expenseItem) => {
            return (
                <Expense
                    key={expenseItem.id}
                    id={expenseItem.id}
                    title={expenseItem.title}
                    date={formatDate(expenseItem.date)}
                    total={expenseItem.total}
                />
            );
        });

        return (
            <AppContainer>
                <HeaderWithTotal
                    expenseTotal={this.state.expenseData
                        .map((expense) => {
                            return Number(expense.total);
                        })
                        .reduce((totalExpense, currentExp) => {
                            return (totalExpense += currentExp);
                        })}
                ></HeaderWithTotal>
                <ExpenseContainerDiv>
                    {!this.state.displayAddExpense ? (
                        <DisplayExpenseFormContainer>
                            <DisplayExpenseFormButton
                                onClick={this.displayAddExpense}
                            >
                                Add Expense
                            </DisplayExpenseFormButton>
                        </DisplayExpenseFormContainer>
                    ) : (
                        <></>
                    )}

                    {this.state.displayAddExpense ? (
                        <AddExpense
                            cancelForm={this.displayAddExpense}
                            onSubmitForm={this.onSubmitFormHandler}
                        ></AddExpense>
                    ) : (
                        <></>
                    )}
                    <FilterExpenseByYear
                        filterYear={this.state.filterYear}
                        setFilterYear={this.setFilterYearHandler}
                        expenseDateArray={this.state.expenseData
                            .map((expense) => {
                                return extractExpenseYear(expense.date);
                            })
                            .filter((expenseYear, idx, expenseYearArr) => {
                                return (
                                    expenseYearArr.indexOf(expenseYear) == idx
                                );
                            })}
                    ></FilterExpenseByYear>
                    <ExpenseHeaderDiv>
                        <span>Date</span>
                        <span>Title</span>
                        <span>Amount</span>
                    </ExpenseHeaderDiv>
                    {mapExpenseState}
                </ExpenseContainerDiv>
            </AppContainer>
        );
    }
}

export default App;
