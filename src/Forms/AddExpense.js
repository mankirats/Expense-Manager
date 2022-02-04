import React, { useState } from "react";
import styled from "styled-components";

const InputField = styled.input`
    width: 48%;
    outline: none;
    font-size: 0.9rem;
    border: 1px solid #393e46;
    border-radius: 4px;
    margin: 4px 2px;
    padding: 0.2rem;
`;
const SubmitButton = styled.button`
    margin: 4px 2px;
    padding: 0.3rem;
    color: #e16428;
    border: 10px solid white;
    width: 48%;
    outline: none;
    font-size: 0.9rem;
    border: 1px solid #393e46;
    border-radius: 4px;
    background: none;
`;

const StyledForm = styled.form`
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function AddExpense(props) {
    const [expenseItem, setExpenseItem] = useState({
        expenseTitle: "",
        expenseTotal: "",
        expenseDate: "",
    });

    const submitForm = (event) => {
        event.preventDefault();
        // console.log(
        //     `${expenseItem.expenseTitle} ${expenseItem.expenseTotal} ${expenseItem.expenseDate}`
        // );
        props.onSubmitForm(expenseItem);
    };
    return (
        <>
            <StyledForm onSubmit={submitForm}>
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

                <SubmitButton type="submit">Add Expense</SubmitButton>
            </StyledForm>
        </>
    );
}

export default AddExpense;
