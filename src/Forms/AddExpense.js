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
        touched: {
            expenseTitle: false,
            expenseTotal: false,
            expenseDate: false,
        },
    });

    const submitForm = (event) => {
        event.preventDefault();
        // console.log(
        //     `${expenseItem.expenseTitle} ${expenseItem.expenseTotal} ${expenseItem.expenseDate}`
        // );
        props.onSubmitForm(expenseItem);
    };

    const errors = {
        titleLessThan5Char: "Expense title should be minimum 5 characters.",
        noTitle: "Please enter Expense Title",
    };

    return (
        <FormContainer>
            <FormTitle>add expense</FormTitle>
            <StyledForm onSubmit={submitForm}>
                <TitleContainerDiv>
                    <FieldLabel>Expense Title</FieldLabel>
                    <InputField
                        type="text"
                        name="title"
                        id="title"
                        value={expenseItem.expenseTitle}
                        // placeholder="Expense Title"
                        onChange={(e) =>
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                expenseTitle: e.target.value.trim(),
                            }))
                        }
                        onBlur={(e) => {
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                touched: {
                                    expenseTitle: true,
                                },
                            }));
                        }}
                    />
                    {expenseItem.touched.expenseTitle &&
                    expenseItem.expenseTitle == "" ? (
                        <Validations>{errors.noTitle}</Validations>
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
                    />
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
                    />
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
