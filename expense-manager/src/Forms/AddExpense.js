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

function AddExpense(props) {
    const [expenseItem, setExpenseItem] = useState({
        // expenseTitle: "",
        expenseTotal: "",
        expenseDate: "",
    });
    const [expenseTouch, setExpenseTouch] = useState({
        // expenseTitle: false,
        expenseTotal: false,
        expenseDate: false,
    });

    const [expenseTitle, expenseTitleDispatch] = useReducer(
        expenseTitleHandler,
        { value: "" }
    );

    const submitForm = (event) => {
        event.preventDefault();
        console.log(expenseTitle);
        if (
            expenseTitle.value.length == 0 ||
            expenseItem.expenseDate.length == 0 ||
            expenseItem.expenseTotal.length == 0
        ) {
            setExpenseTouch({
                // expenseTitle['type']: "USER_TYPE",
                expenseTotal: true,
                expenseDate: true,
            });
            return;
        }
        props.onSubmitForm(expenseItem, expenseTitle.value);

        setExpenseItem({
            // expenseTitle.value: "",
            expenseTotal: "",
            expenseDate: "",
        });
        setExpenseTouch({
            expenseTitle: { value: "" },
            expenseTotal: false,
            expenseDate: false,
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
                        // placeholder="Expense Title"
                        onChange={(e) => {
                            expenseTitleDispatch({
                                type: "USER_INPUT",
                                val: e.target.value,
                            });
                            console.log(expenseTitle);
                            // setExpenseItem((prevState) => ({
                            //     ...prevState,
                            //     expenseTitle: e.target.value.trim(),
                            // }));
                        }}
                        onBlur={(e) => {
                            expenseTitleDispatch({
                                type: "USER_BLUR",
                            });
                            // setExpenseTouch((prevState) => ({
                            //     ...prevState,
                            //     expenseTitle: true,
                            // }));
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
                        value={expenseItem.expenseDate}
                        onChange={(e) =>
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                expenseDate: e.target.value,
                            }))
                        }
                        onBlur={(e) => {
                            setExpenseTouch((prevState) => ({
                                ...prevState,
                                expenseDate: true,
                            }));
                        }}
                    />
                    {expenseTouch.expenseDate &&
                    expenseItem.expenseDate == "" ? (
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
                        // placeholder="Expense Total"
                        value={expenseItem.expenseTotal}
                        onChange={(e) =>
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                expenseTotal: e.target.value,
                            }))
                        }
                        onBlur={(e) => {
                            setExpenseTouch((prevState) => ({
                                ...prevState,
                                expenseTotal: true,
                            }));
                        }}
                    />
                    {expenseTouch.expenseTotal &&
                    expenseItem.expenseTotal == "" ? (
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
