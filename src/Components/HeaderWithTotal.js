import React from "react";
import { PageHeader, ExpenseTotalHeader, PageTitle } from "./styledComponents";

function HeaderWithTotal(props) {
    return (
        <>
            <PageHeader>
                <PageTitle>expense_manager</PageTitle>
                <ExpenseTotalHeader>{props.expenseTotal}</ExpenseTotalHeader>
            </PageHeader>
        </>
    );
}

export default HeaderWithTotal;
