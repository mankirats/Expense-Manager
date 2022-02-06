import React, { useState } from "react";
import { FilterYearDiv } from "./styledComponents";
import { extractExpenseYear } from "../commonFunction/commonFunc";
function FilterExpenseByYear(props) {
    let [filterYear, setFilterYear] = useState(0);
    let expenseDateMapping = props.expenseDateArray.map(
        (expenseDate, index) => {
            return (
                <option key={index} value={extractExpenseYear(expenseDate)}>
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
                    <select
                        value={filterYear}
                        onChange={(e) => {
                            setFilterYear(e.target.value);
                            return props.onFilterExpenseData(e.target.value);
                        }}
                        name="expenseYear"
                        id="expenseYear"
                    >
                        <option key="All" value="all">
                            All
                        </option>
                        {expenseDateMapping}
                    </select>
                </FilterYearDiv>
            </form>
        </>
    );
}

export default FilterExpenseByYear;
