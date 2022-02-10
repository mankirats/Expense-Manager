import styled from "styled-components";
import { devices } from "../devices";
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
    font-size: 1rem;
    font-weight: 500;
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
    overflow-wrap: break-word;
`;
const ExpenseDate = styled.span`
    text-align: left;
    width: calc(100% / 3);
    overflow-wrap: break-word;
`;
const InputContainerDiv = styled.div`
    width: calc(100% / 3 - 10px);
    margin: 5px 2px;

    @media ${devices.mobileL} {
        width: calc(100% - 10px);
    }
`;
const ButtonContainerDiv = styled.div`
    width: calc(100% - 10px);
    margin: 5px 2px;
`;
const InputField = styled.input`
    outline: none;
    width: 100%;
    font-size: 0.9rem;
    border: 1.5px solid ${color1};
    border-radius: 4px;
    margin: 3px 0px;
    padding: 0.4rem;
    background: white;
    &:nth-child(1) {
        width: 100%;
    }
`;
const CancelButton = styled.button`
    letter-spacing: 0.5px;
    margin: 4px 4px;
    padding: 0.3rem;
    color: ${color1};
    width: calc(100% / 2 - 8px);
    outline: none;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: bold;
    background: ${color4};
    border: 1.5px solid ${color1};
`;
const SubmitButton = styled.button`
    background: ${color1};
    letter-spacing: 0.5px;
    margin: 4px 4px;
    padding: 0.3rem;
    color: ${color4};
    outline: none;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid ${color5};
    width: calc(100% / 2 - 8px);
`;

const StyledForm = styled.form`
    display: flex;
    padding: 0.2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background: ${color5}; */
    border-radius: 4px;
`;
const FormContainer = styled.div`
    border-radius: 4px;
    background: ${color4};
`;

const FormTitle = styled.div`
    text-align: right;
    background: ${color3};
    padding: 0.2rem 1rem;
    /* font-weight: 700; */
    color: ${color1};
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
    /* max-width: 55vw; */
    @media ${devices.mobileL} {
        width: calc(100% - 10px);
        padding: 2rem;
    }
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
    background: ${color2};
    margin-bottom: -0.5rem;
    padding: 0 2rem;
    border-radius: 8px 8px 0 0;
    height: calc(1.7rem + 1.7vh);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: ${color4};
    & select {
        background: transparent;
        font-size: 1rem;
        color: inherit;
        font-weight: 600;
        outline: 0;
        border: 0;
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
    @media ${devices.mobileL} {
        padding: 1.5rem 1rem;
        font-size: 0.8rem;
        font-weight: 600;
    }
`;

const PageTitle = styled.span`
    justify-content: center;
    @media ${devices.mobileL} {
        width: 100%;
    }
`;
const ExpenseTotalHeader = styled.span`
    margin-left: auto;
    font-weight: 600;
`;

const DisplayExpenseFormContainer = styled.div`
    height: 3rem;
    width: 100%;
    background: ${color3};
    display: grid;
    border-radius: 4px;
    place-items: center;
    margin: 1rem 0;
`;
const DisplayExpenseFormButton = styled.button`
    height: 2rem;
    width: 8rem;
    outline: none;
    border: 0;
    color: ${color4};
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 0.9rem;
    background: ${color1};
`;

export {
    InputContainerDiv,
    ButtonContainerDiv,
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
