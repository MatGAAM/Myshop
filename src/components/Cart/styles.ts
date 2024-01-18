import styled from "styled-components";

interface ContainerProps {
    showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? '0' : '-500px' };

    width: 450px;
    background-color: white;
    height: 100vh;
    
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

    transition: 0.65s;
`;
export const Title = styled.h1``;

export const CartProductsList = styled.ul`
    margin-top: 1rem;
    max-height: 35rem;
    min-height: 35rem;

    list-style-type: none;

    overflow-y: scroll;
`;
export const CartProductItem = styled.section`
    margin: 0.5rem 0;
    background-color: #dcdcdc;
    width: 100%;
    max-height: 6rem;
    min-height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 5;

    border-radius: 5px;
`;
export const CartProductTitle = styled.strong`
    font-size: 0.80rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 350px;


    padding-top: 0.3rem;
`;
export const CartTotal = styled.strong``;

export const WrapperButtonRemove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ContainerButtonRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.25rem;
    width: 80%;

`;
export const RemoveButton = styled.button`
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    svg {
        font-size: 2rem;
        background-color: #dcdcdc;
        width: 100%;
        border-radius: 5px;

        &:hover {
            color: white;
            background-color: red;
        }
    }
`;

export const Review = styled.span`
    display: flex;
    font-size: 0.7rem;

    svg {
        font-size: 1rem;
    }
`

export const Price = styled.strong``

export const WrapperHeadCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const HideCart = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    border-radius: 50px;
    border: none; 
    
    svg {
        font-size: 1.5rem;
    }
`;

export const FooterCart = styled.footer`
    height: 3rem;
    width: 100%;
    position: absolute;
    bottom: 1rem;

    display: flex;
    align-items: center;

`
