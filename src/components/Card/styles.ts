import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    max-width: 100%;
    /* min-width: 400px; */
    align-items: center;
    flex-direction: column;
`
export const Title = styled.span`
    width: 98%;
    color: #290742;
    font-size: 1.4em;
    margin: 10px 0px;
    font-weight: 700;
    font-family: 'Roboto';
`
export const Date = styled.span`
    width: 98%;
    margin-top: 10px;
    font-weight: 600;
    filter: opacity(80%);
    font-family: 'Roboto';
`
export const Message = styled.span`
    width: 98%;
    font-weight: 600;
    filter: opacity(80%);
    font-family: 'Roboto';
`
export const Image = styled.img`
    width: 100%;
`