import { Product } from "../../data/products";

interface CartState {
    cart: Product[]
}

interface CartAction {
    type: string,
    payload: Product
}

const initicialState: CartState = {
    cart: [],
}

export function cartReducer(state = initicialState, action: CartAction) {
    console.log('state', state)
    console.log('action', action)
    switch(action.type){
        case 'cart/add-product':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case 'cart/remove-product':
            const productToRemove = action.payload
            const cartFiltered = state.cart.filter((product) => product.id !== productToRemove.id)

            return {
                ...state,
                cart: cartFiltered
            }

        default:
            return state
    }
    return state
}