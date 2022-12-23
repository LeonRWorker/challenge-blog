import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    :nth-child(1) {
        /* min-height: 300px; */
        padding: 30px 0px;
        background-color: #290742;
        border-bottom: 4px solid #4fff4b;
    }
    :nth-child(2) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`
export const HiddenHR = styled.div`
    width: 95%;
    display: none;
    margin: 0 auto;
    margin-top: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const MainCard = styled.div`
    gap: 10%;
    width: 72%;
    display: flex;
    margin-bottom: 50px;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 1023px) {
        gap: 10px;
        flex-direction: column;
        ${HiddenHR}{
            display: block;
        }
    }
`
export const NoCards = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const NoCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HR = styled.div`
    width: 100%;
    margin-top: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const Cards = styled.div`
    gap: 20px;
    width: 72%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1023px) {
        grid-template-columns: repeat(1, 1fr);
        ${HiddenHR}{
            display: block;
            margin-top: 0px;
        }
    }
`
export const Header = styled.div`
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
    filter: opacity(70%);
    font-family: 'Roboto';
    transition: .3s linear;
    border: 2px solid transparent;
    background-color: transparent;
    :hover {
        filter: opacity(100%);
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