// Action Types
export const WISHLIST_ADD_ITEM = "wishlist_add_item";
export const WISHLIST_REMOVE_ITEM = "wishlist_remove_item";

// Action Creators
export function wishListAddItem(productId) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId },
  };
}

export function wishListRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducer
export default function wishListReducer(state = [], action) {
  console.log("Action Type: ", action);
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return state.includes(action.payload.productId)
        ? state
        : [...state, action.payload.productId];

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
