import styled from "styled-components";

interface ContainerProps {
    showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? '0' : '-350px' };

    width: 300px;
    background-color: white;
    height: 100vh;
    
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

    transition: 0.65s;
`;
export const Title = styled.h1``;

export const CartProductsList = styled.ul`
    margin-top: 1rem;
    list-style-type: none;
`;
export const CartProductItem = styled.section`
    background-color: green;
    margin: 0.5rem 0;
    
    width: 100%;
    max-height: 4rem;
    min-height: 4rem;

`;
export const CartProductTitle = styled.li``;
export const CartTotal = styled.strong``;
export const RemoveButton = styled.button``;

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

    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`
