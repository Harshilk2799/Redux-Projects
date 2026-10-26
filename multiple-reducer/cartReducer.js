// Action Types
export const CART_ADD_ITEM = "cart_add_item";
export const CART_REMOVE_ITEM = "cart_remove_item";
export const CART_ITEM_INCREASE_QUANTITY = "cart_item_increase_quantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart_item_decrease_quantity";

// Action Creators
export function cartItemAdd(productId, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

export function cartItemRemove(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducer
export default function cartReducer(state = [], action) {
  console.log("Action Type: ", action);
  switch (action.type) {
    case CART_ADD_ITEM: {
      const { productId } = action.payload;
      const exists = state.some((item) => item.productId === productId);

      return exists
        ? state.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state, { productId, quantity: 1 }];
    }
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case CART_ITEM_DECREASE_QUANTITY:
      return state
        .map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    default:
      return state;
  }
}
