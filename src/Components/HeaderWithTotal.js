import React from "react";
import { PageHeader, ExpenseTotalHeader, PageTitle } from "./styledComponents";

function HeaderWithTotal(props) {
    return (
        <>
            <PageHeader>
                <PageTitle>EXPENSE MANAGER</PageTitle>
                <ExpenseTotalHeader>
                    TOTAL EXPENDITURE:
                    {props.expenseTotal == 0 ? 0 : props.expenseTotal}
                </ExpenseTotalHeader>
            </PageHeader>
        </>
    );
}

export default HeaderWithTotal;
