import styled from "styled-components";

export const Content = styled.div`
    gap: 30px;
    width: 80%;
    display: flex;
    min-height: 80vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const Title = styled.span`
    width: 600px;
    color: #290742;
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    @media (max-width: 767px) {
        width: 100%;
    }
`
export const Text = styled.span``
export const Option = styled.div``
export const Options = styled.div`
    gap: 20px;
    width: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    ${Option} {
        gap: 10px;
        width: 100%;
        display: flex;
        cursor: pointer;
        min-height: 200px;
        padding: 30px 20px;
        align-items: center;
        /* border-radius: 10px; */
        flex-direction: column;
        transition: .3s linear;
        justify-content: center;
        border: 1px solid rgba(0,0,0,0.1);
        *:nth-child(1) {
            padding: 10px;
            font-size: 2.5em;
            /* border-radius: 5px; */
            margin-bottom: 10px;
            border: 1px solid rgba(0,0,0,0.1);
        }
        ${Text}:nth-child(2) {
            color: #290742;
            font-size: 1.2em;
            font-weight: 600;
            text-align: center;
        }
        ${Text}:nth-child(3) {
            width: 90%;
            font-size: 1.1em;
            text-align: center;
        }
        :hover {
            transform: scale(1.01);
            border: 1px solid #290742;
        }
    }
    @media (max-width: 767px) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
`
export const ToCheck = styled.div``
export const CheckBox = styled.input`
    width: 100px;
    width: 250px;
    height: 200px;
    appearance: none;
    margin-bottom: -180px;
    transform: translateY(25px);
    :checked + ${Option} {
        transform: scale(1.05);
        border: 1px solid #290742;
    }
    @media (max-width: 1023px) {
        width: 100%;
    }
`
export const Continue = styled.button`
    color: white;
    width: 800px;
    cursor: pointer;
    font-size: 1.1em;
    padding: 10px 0px;
    /* border-radius: 10px; */
    transition: .3s linear;
    background-color: #290742;
    border: 1px solid #290742;
    :hover {
        color: #290742;
        background-color: white;
    }
    @media (max-width: 1023px) {
        width: 100%;
    }
`
export const FieldSets = styled.div`
    gap: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const FieldSet = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Label = styled.span`
    width: 100%;
    font-size: 1.1em;
    font-weight: 600;
`
export const Field = styled.input`
    width: 100%;
    font-size: 1em;
    padding: 10px 20px;
    border: 1px solid rgba(0,0,0,0.2);
    :focus {
        border: 1px solid rgba(0,0,0,0.4);
    }
`
export const Select = styled.select`
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    :focus {
        border: 1px solid rgba(0,0,0,0.4);
    }
`
export const SelectOption = styled.option``
export const Message = styled.textarea`
    width: 100%;
    resize: none;
    padding: 20px;
    color: #290742;
    font-size: 1em;
    max-height: 200px;
    ::placeholder {
        color: #290742;
    }
    margin-top: -10px;
    border: 1px solid rgba(0,0,0,0.2);
`
export const Forms = styled.div`
    gap: 20px;
    width: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 767px) {
        width: 100%;
        ${FieldSets} {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
    }
`
export const ReturnOrContinue = styled.div`
    gap: 20px;
    width: 800px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    ${Continue} {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
    }
`
export const ContactMe = styled.span`
    color: #290742;
    font-size: 1.8em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    @media (max-width: 767px) {
        margin-bottom: 0px;
    }
`