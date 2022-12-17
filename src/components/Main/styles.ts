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