import React from "react";

import * as S from './styles'
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";
import { MdArrowForward } from "react-icons/md";

interface CartProps {
    showCart: boolean,
    cart: Product[],
    fnSetShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Cart: React.FC<CartProps> = ({showCart, cart, fnSetShowCart}) => {

    const dispatch = useDispatch() 

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)

    return (
        <S.Container showCart={showCart}>
            <S.WrapperHeadCart>
                <S.Title>Carrinho</S.Title>
                <S.HideCart onClick={() => fnSetShowCart(!showCart)}>
                    <MdArrowForward />
                </S.HideCart>
            </S.WrapperHeadCart>
            <S.CartProductsList>
                {
                    cart.map(product => (
                        <S.CartProductItem>
                            <S.CartProductTitle key={product.id}>{product.title}</S.CartProductTitle>
                            <S.RemoveButton onClick={() => dispatch(removeProduct(product))}>Remover</S.RemoveButton>
                        </S.CartProductItem>
                    ))
                }
            </S.CartProductsList>
            <S.FooterCart>
                <S.CartTotal data-testid="total">Total: R$ {total}</S.CartTotal>
            </S.FooterCart>
        </S.Container>
    )
} 