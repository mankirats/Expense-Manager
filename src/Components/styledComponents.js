import styled from "styled-components";

const ExpenseDiv = styled.div`
    position: relative;
    background: #393e46;
    margin: 0.2rem 0;
    /* width: 45vw; */
    padding: 0 2rem;
    min-height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
const SubmitButton = styled.button`
    background: white;
    letter-spacing: 0.5px;
    margin: 4px 4px;
    padding: 0.3rem;
    color: #e16428;
    width: calc(95% / 2);
    outline: none;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: bold;
`;

const StyledForm = styled.form`
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #f9f9f9;
    border-radius: 4px;
`;
const FormContainer = styled.div`
    /* padding: 0.2rem; */
    border: 1px solid #393e46;
    border-radius: 4px;
    background: #f9f9f9;
`;

const FormTitle = styled.div`
    color: white;
    text-align: right;
    background: #797887;
    padding: 0.2rem 1rem;
    font-weight: 700;
    font-size: 1.05rem;
`;

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ExpenseContainerDiv = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    max-width: 55vw;
`;

const ExpenseHeaderDiv = styled.div`
    position: relative;
    background: #222831;
    margin: 0.5rem 0;
    padding: 0 2rem;
    height: calc(2rem + 2vh);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    letter-spacing: 1px;
`;

const FilterYearDiv = styled.div`
    position: relative;
    background: #797887;
    margin-bottom: -0.5rem;
    padding: 0 2rem;
    border-radius: 8px 8px 0 0;
    height: calc(1.7rem + 1.7vh);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    & select {
        background: transparent;
        color: white;
        font-size: 1rem;
        font-weight: 600;
    }
    & option {
        border: transparent;
        outline: 0;
        color: black;
        background: transparent;
    }
`;

const PageHeader = styled.div`
    background: #fabb52;
    height: calc(2rem + 2vh);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.7rem;
    font-weight: 700;
`;

const PageTitle = styled.span`
    justify-content: center;
`;
const ExpenseTotalHeader = styled.span`
    margin-left: auto;
    font-weight: 600;
`;

export {
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
