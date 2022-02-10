import React, { useState } from "react";
import styled from "styled-components";
import {
    FormTitle,
    FormContainer,
    StyledForm,
    SubmitButton,
    InputField,
    CancelButton,
    InputContainerDiv,
    ButtonContainerDiv,
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

    return (
        <FormContainer>
            <FormTitle>add expense</FormTitle>
            <StyledForm onSubmit={submitForm}>
                <InputContainerDiv>
                    <InputField
                        type="text"
                        name="title"
                        id="title"
                        value={expenseItem.expenseTitle}
                        placeholder="Expense Title"
                        onChange={(e) =>
                            setExpenseItem((prevState) => ({
                                ...prevState,
                                expenseTitle: e.target.value,
                            }))
                        }
                    />
                </InputContainerDiv>

                <InputContainerDiv>
                    <InputField
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Expense Date"
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
                    <InputField
                        type="number"
                        name="total"
                        id="total"
                        placeholder="Expense Total"
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
