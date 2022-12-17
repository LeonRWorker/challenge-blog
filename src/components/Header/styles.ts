import styled from "styled-components";

export const Content = styled.div`
    width: 71%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1080px) {
        gap: 20px;
        flex-direction: column;
    }
`
export const Dot = styled.span``
export const Title = styled.span`
    color: white;
    font-size: 1.8em;
    font-family: 'Poppins';
    ${Dot} {
        color: #4fff4b;
    }
`
export const ToSearch = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 1080px) {
        width: 100%;
    }
`
export const Search = styled.input`
    color: white;
    border: none;
    min-width: 250px;
    font-size: 0.8em;
    padding: 10px 20px;
    font-family: 'Roboto';
    background-color: #170027;
    border-radius: 5px 0px 0px 5px;
    ::placeholder {
        color: rgba(255,255,255,0.7);
    }
    @media (max-width: 1080px) {
        width: 100%;
    }
`
export const Icon = styled.span`
    color: white;
    display: flex;
    padding: 9.5px;
    align-items: center;
    justify-content: center;
    background-color: #9e6dc2;
    border-radius: 0px 5px 5px 0px;
`
export const Link = styled.button`
    color: white;
    font-size: 1em;
    cursor: pointer;
    padding: 0px 5px;
    filter: opacity(80%);
    font-family: 'Roboto';
    transition: .3s linear;
    border: 2px solid transparent;
    background-color: transparent;
    :hover {
        filter: opacity(100%);
        border-left: 2px solid #4fff4b;
    }
`
export const Navigation = styled.nav`
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 470px) {
        gap: 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`