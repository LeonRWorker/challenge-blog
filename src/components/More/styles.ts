import styled from "styled-components";

export const Content = styled.div`
    gap: 20px;
    width: 71%;
    display: flex;
    margin-top: 50px;
    margin-bottom: 30px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1023px) {
        flex-direction: column-reverse;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 10px;
`
export const Title = styled.span`
    width: 100%;
    color: #9e6dc2;
    font-size: 1.8em;
    font-weight: 700;
    font-family: 'Poppins';
`
export const Legend = styled.span`
    width: 60%;
    color: white;
    margin: 20px 0px;
    font-size: 0.9em;
    font-family: 'Roboto';
`
export const ViewMore = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    color: #9e6dc2;
    cursor: pointer;
    font-size: 0.9em;
    align-items: center;
    font-family: 'Roboto';
    justify-content: flex-start;
`
export const Card = styled.div`
    width: 50%;
    display: flex;
    /* overflow: hidden; */
    flex-direction: column;
    :nth-child(2) {
        width: 400px;
        height: 250px;
    }
    @media (max-width: 470px) {
        width: 100%;
        ${Title} {
            width: 100%;
            font-size: 1.3em;
        }
        ${Legend} {
            width: 100%;
            font-size: 1em;
        }
        ${ViewMore} {
            width: 100%;
            font-size: 1em;
        }
        :nth-child(2) {
            width: 100%;
        }
    }
    @media (min-width: 471px) and (max-width: 1023px) {
        width: 100%;
        ${Title} {
            width: 100%;
            font-size: 1.5em;
        }
        ${Legend} {
            width: 100%;
            font-size: 1.1em;
        }
        ${ViewMore} {
            width: 100%;
            font-size: 1.1em;
        }
        :nth-child(2) {
            width: 100%;
        }
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
        ${Title} {
            font-size: 1.4em;
        }
    }
`