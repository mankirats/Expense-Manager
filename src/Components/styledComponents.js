import styled from "styled-components";
import { colorPalette } from "./colorPalette";

const { color1, color2, color3, color4, color5 } = colorPalette;

const ExpenseDiv = styled.div`
    position: relative;
    background: ${color4};
    margin: 0.2rem 0;
    /* width: 45vw; */
    padding: 0 2rem;
    min-height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${color1};
`;

const ExpenseEntryNumber = styled.span`
    width: 30px;
    height: 30px;
    left: -8px;
    background: #e16428;
    border-radius: 30px;
    color: #082032;
    font-weight: bold;
    display: grid;
    font-size: 0.9rem;
    place-items: center;
    display: none;
    position: absolute;
`;
const ExpenseTitle = styled.span`
    text-align: center;
    width: calc(100% / 3);
    overflow-wrap: break-word;
`;
const ExpenseTotal = styled.span`
    width: calc(100% / 3);
    text-align: right;
`;
const ExpenseDate = styled.span`
    text-align: left;
    width: calc(100% / 3);
`;

const InputField = styled.input`
    width: calc(95% / 2);
    outline: none;
    font-size: 0.9rem;
    border: 1px solid #393e46;
    border-radius: 4px;
    margin: 4px 2px;
    padding: 0.2rem;
    background: white;
`;
const CancelButton = styled.button`
    background: black;
    letter-spacing: 0.5px;
    margin: 4px 4px;
    padding: 0.3rem;
    color: ${color1};
    /* width: calc(95% / 2); */
    outline: none;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid ${color5};
`;
const SubmitButton = styled.button`
    background: white;
    letter-spacing: 0.5px;
    margin: 4px 4px;
    padding: 0.3rem;
    color: ${color1};
    width: calc(95% / 2);
    outline: none;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid ${color5};
`;

const StyledForm = styled.form`
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: ${color5};
    border-radius: 4px;
`;
const FormContainer = styled.div`
    border-radius: 4px;
    background: #f9f9f9;
`;

const FormTitle = styled.div`
    text-align: right;
    background: ${color2};
    padding: 0.2rem 1rem;
    /* font-weight: 700; */
    color: ${color4};
    font-size: 1.05rem;
    border-radius: 4px 4px 0 0;
`;

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ExpenseContainerDiv = styled.div`
    width: 45vw;
    margin: 1rem 0;
    padding: 1rem;
    max-width: 55vw;
`;

const ExpenseHeaderDiv = styled.div`
    position: relative;
    background: ${color1};
    margin: 0.5rem 0;
    padding: 0 2rem;
    height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    color: ${color3}
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    letter-spacing: 1px;
`;

const FilterYearDiv = styled.div`
    position: relative;
    background: ${color3};
    margin-bottom: -0.5rem;
    padding: 0 2rem;
    border-radius: 8px 8px 0 0;
    height: calc(1.7rem + 1.7vh);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: ${color1};
    & select {
        background: transparent;
        font-size: 1rem;
        color: ${color1};
        font-weight: 600;
    }
    & option {
        border: transparent;
        outline: 0;
        color: ${color1};
        background: transparent;
    }
`;

const PageHeader = styled.div`
    background: ${color1};
    height: calc(2rem + 2vh);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.7rem 5rem;
    font-weight: 800;
    color: ${color4};
`;

const PageTitle = styled.span`
    justify-content: center;
`;
const ExpenseTotalHeader = styled.span`
    margin-left: auto;
    font-weight: 600;
    color: ${color3};
`;

const DisplayExpenseFormContainer = styled.div`
    height: 3rem;
    width: 100%;
    background: ${color3};
    display: grid;

    place-items: center;
`;
const DisplayExpenseFormButton = styled.button`
    height: 2rem;
    outline: none;
    border: 0;
    border-radius: 4px;
    color: ${color4};
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 0.9rem;
    background: ${color1};
`;

export {
    CancelButton,
    DisplayExpenseFormButton,
    DisplayExpenseFormContainer,
    ExpenseDiv,
    PageTitle,
    ExpenseTotalHeader,
    ExpenseEntryNumber,
    ExpenseTitle,
    ExpenseTotal,
    ExpenseDate,
    FormTitle,
    FormContainer,
    StyledForm,
    SubmitButton,
    InputField,
    AppContainer,
    ExpenseContainerDiv,
    ExpenseHeaderDiv,
    FilterYearDiv,
    PageHeader,
};
