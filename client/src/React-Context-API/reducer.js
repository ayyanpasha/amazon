export const initialState = {
    basket: JSON.parse(sessionStorage.getItem('basket')) || [],
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const item = action.item;
            const currentItems = state.basket;
            let itemFound = false; // Flag variable to track if the item was found

            for (const eachItem of currentItems) {
                if (item.id === eachItem.id) {
                    eachItem.quantity++;
                    itemFound = true; // Set the flag to true if the item is found
                    break; // Exit the loop since the item is found
                }
            }

            if (itemFound) {
                return {
                    ...state,
                    basket: currentItems,
                };
            } else {
                item.quantity = 1;
                const updatedBasket = [...state.basket, item];
                sessionStorage.setItem('basket', JSON.stringify(updatedBasket));
                return {
                    ...state,
                    basket: updatedBasket,
                };
            }

        case 'DELETE_FROM_BASKET':
            // Code for deleting from basket
            const indexDelete = state.basket.findIndex((item) => item.id === action.item.id);
            let newBasketDelete = [...state.basket];
            if (indexDelete >= 0)
                newBasketDelete.splice(indexDelete, 1);
            return {
                ...state,
                basket: newBasketDelete,
            };
        case 'UPDATE_BASKET':
            if (!action.item.quantity)
                action.item.quantity = 0;
            const indexUpdate = state.basket.findIndex((item) => item.id === action.item.id);
            let newBasketUpdate = [...state.basket];
            if (indexUpdate >= 0)
                newBasketUpdate[indexUpdate].quantity = parseInt(action.item.quantity);
            return {
                ...state,
                basket: newBasketUpdate,
            };

        default:
            return state;
    }
};


export default reducer;
