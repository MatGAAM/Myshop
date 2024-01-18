import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    width: 100%;
    box-shadow: 5px rgba(5,5,5,0);

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
`

export const ProductImage = styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;
`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 1rem;

    min-height: 3rem;
`

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`

export const Review = styled.span`
    display: flex;
    font-size: 0.7rem;

    svg {
        font-size: 1rem;
    }
`

export const Price = styled.strong``

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;

`

export const AddToCardButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    justify-content: center;

    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background-color: blue;
    color: white;

    svg {
        font-size: 0.7rem;
    }
`

export const RemoveFromCardButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    justify-content: center;

    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background-color: red;
    color: white;

    svg {
        font-size: 0.7rem;
        color: white;
    }
`
export const WrapperFooterCard = styled.footer`
    width: 100%;
    margin-top: auto;
    justify-content: space-between;
`