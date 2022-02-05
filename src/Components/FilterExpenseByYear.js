import React from "react";
import { FilterYearDiv } from "./styledComponents";
const extractExpenseYear = (expenseDate) => {
    let expenseYear = new Date(expenseDate);
    return expenseYear.getFullYear();
};
function FilterExpenseByYear(props) {
    let expenseDateMapping = props.expenseDateArray.map(
        (expenseDate, index) => {
            return (
                <option
                    key={index}
                    value={extractExpenseYear(expenseDate)}
                    onChange={(expenseDate) =>
                        props.onFilterExpenseData(expenseDate)
                    }
                >
                    {extractExpenseYear(expenseDate)}
                </option>
            );
        }
    );
    return (
        <>
            <form action="">
                <FilterYearDiv>
                    <span>Filter by</span>
                    <select name="expenseYear" id="expenseYear">
                        <option value="all">All</option>
                        {expenseDateMapping}
                    </select>
                </FilterYearDiv>
            </form>
        </>
    );
}

export default FilterExpenseByYear;
