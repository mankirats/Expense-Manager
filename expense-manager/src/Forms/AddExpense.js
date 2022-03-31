import React, { useState, useReducer } from "react";

import {
    FormTitle,
    FormContainer,
    StyledForm,
    SubmitButton,
    InputField,
    CancelButton,
    InputContainerDiv,
    ButtonContainerDiv,
    TitleContainerDiv,
    Validations,
    FieldLabel,
} from "../Components/styledComponents";

const expenseTitleHandler = (state, action) => {
    if (action["type"] == "USER_INPUT") {
        return { value: action.val, type: "USER_TYPE" };
    } else if (action["type"] == "USER_BLUR") {
        return { value: state.value, type: "USER_TYPE" };
    }
    return { value: "" };
};

const expenseTotalHandler = (state, action) => {
    if (action.type == "USER_TYPE") {
        return { value: action.val, type: "USER_TYPE" };
    } else if (action.type == "USER_BLUR") {
        return { value: state.value, type: "USER_TYPE" };
    }
    return { value: "" };
};

const expenseDateHandler = (state, action) => {
    if (action.type == "USER_TYPE") {
        return { value: action.val, type: "USER_TYPE" };
    } else if (action.type == "USER_BLUR") {
        return { value: state.value, type: "USER_TYPE" };
    }
    return { value: "" };
};

function AddExpense(props) {
    const [expenseTitle, expenseTitleDispatch] = useReducer(
        expenseTitleHandler,
        { value: "" }
    );

    const [expenseTotal, expenseTotalDispatch] = useReducer(
        expenseTotalHandler,
        { value: "" }
    );

    const [expenseDate, expenseDateDispatch] = useReducer(expenseDateHandler, {
        value: "",
    });

    const submitForm = (event) => {
        event.preventDefault();
        if (
            expenseTitle.value.length == 0 ||
            expenseDate.value.length == 0 ||
            expenseTotal.value.length == 0
        ) {
            return;
        }
        props.onSubmitForm({
            expenseTitle: expenseTitle.value,
            expenseDate: expenseDate["value"],
            expenseTotal: expenseTotal.value,
        });
    };
    const errors = {
        titleLessThan3Char: "Expense title must be minimum 3 characters.",
        noTitle: "Please enter Expense Title",
        noDate: "Please enter Expense Date",
        noAmount: "Please enter Expense Amount",
    };

    return (
        <FormContainer>
            <FormTitle>Add Expense</FormTitle>
            <StyledForm onSubmit={submitForm}>
                <TitleContainerDiv>
                    <FieldLabel>Expense Title</FieldLabel>
                    <InputField
                        type="text"
                        name="title"
                        id="title"
                        value={expenseTitle.value}
                        onChange={(e) => {
                            expenseTitleDispatch({
                                type: "USER_INPUT",
                                val: e.target.value,
                            });
                        }}
                        onBlur={(e) => {
                            expenseTitleDispatch({
                                type: "USER_BLUR",
                            });
                        }}
                    />
                    {expenseTitle.type == "USER_TYPE" &&
                    expenseTitle.value == "" ? (
                        <Validations>{errors.noTitle}</Validations>
                    ) : expenseTitle.type == "USER_TYPE" &&
                      expenseTitle.value.length < 3 ? (
                        <Validations>{errors.titleLessThan3Char}</Validations>
                    ) : (
                        <></>
                    )}
                </TitleContainerDiv>
                <InputContainerDiv>
                    <FieldLabel>Expense Date</FieldLabel>
                    <InputField
                        type="date"
                        name="date"
                        id="date"
                        // placeholder="Expense Date"
                        value={expenseDate.value}
                        onChange={(e) => {
                            expenseDateDispatch({
                                val: e.target.value,
                                type: "USER_TYPE",
                            });
                        }}
                        onBlur={(e) => {
                            expenseDateDispatch({
                                type: "USER_BLUR",
                            });
                        }}
                    />
                    {expenseDate.type == "USER_TYPE" &&
                    expenseDate.value == "" ? (
                        <Validations>{errors.noDate}</Validations>
                    ) : (
                        <>&nbsp;</>
                    )}
                </InputContainerDiv>

                <InputContainerDiv>
                    <FieldLabel>Expense Amount</FieldLabel>

                    <InputField
                        type="number"
                        name="total"
                        id="total"
                        value={expenseTotal.value}
                        onChange={(e) => {
                            expenseTotalDispatch({
                                type: "USER_TYPE",
                                val: e.target.value,
                            });
                        }}
                        onBlur={(e) => {
                            expenseTotalDispatch({
                                type: "USER_BLUR",
                            });
                        }}
                    />
                    {expenseTotal.type == "USER_TYPE" &&
                    expenseTotal.value == "" ? (
                        <Validations>{errors.noAmount}</Validations>
                    ) : (
                        <>&nbsp;</>
                    )}
                </InputContainerDiv>
                <ButtonContainerDiv>
                    <CancelButton onClick={props.cancelForm}>
                        Cancel
                    </CancelButton>

                    <SubmitButton type="submit">ADD EXPENSE</SubmitButton>
                </ButtonContainerDiv>
            </StyledForm>
        </FormContainer>
    );
}

export default AddExpense;
