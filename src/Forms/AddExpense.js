import React, { useState } from "react";

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

function AddExpense(props) {
    const [expenseItem, setExpenseItem] = useState({
        expenseTitle: "",
        expenseTotal: "",
        expenseDate: "",
    });
    const [expenseTouch, setExpenseTouch] = useState({
        expenseTitle: false,
        expenseTotal: false,
        expenseDate: false,
    });

    const submitForm = (event) => {
        event.preventDefault();
        // console.log(
        //     `${expenseItem.expenseTitle} ${expenseItem.expenseTotal} ${expenseItem.expenseDate}`
        // );
        if (
            expenseItem.expenseTitle.length == 0 ||
            expenseItem.expenseDate.length == 0 ||
            expenseItem.expenseTotal.length == 0
        ) {
            return;
        }
        props.onSubmitForm(expenseItem);

        setExpenseItem({
            expenseTitle: "",
            expenseTotal: "",
            expenseDate: "",
        });
        setExpenseTouch({
            expenseTitle: false,
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
                        value={expenseItem.expenseTitle}
                        // placeholder="Expense Title"
                        onChange={(e) => {
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                expenseTitle: e.target.value.trim(),
                            }));
                        }}
                        onBlur={(e) => {
                            setExpenseTouch((prevState) => ({
                                ...prevState,
                                expenseTitle: true,
                            }));
                        }}
                    />
                    {expenseTouch.expenseTitle &&
                    expenseItem.expenseTitle == "" ? (
                        <Validations>{errors.noTitle}</Validations>
                    ) : expenseTouch.expenseTitle &&
                      expenseItem.expenseTitle.length < 3 ? (
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
