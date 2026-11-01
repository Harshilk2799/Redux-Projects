import { productsList } from "./productsList";
import { createStore } from "redux";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEM = "cart_add_item";
const CART_REMOVE_ITEM = "cart_remove_item";
const CART_ITEM_INCREASE_QUANTITY = "cart_item_increase_quantity";
const CART_ITEM_DECREASE_QUANTITY = "cart_item_decrease_quantity";

const WISHLIST_ADD_ITEM = "wishlist_add_item";
const WISHLIST_REMOVE_ITEM = "wishlist_remove_item";

function reducer(state = initialState, action) {
  // It will receive state and action
  // based on action, return a new state
  // this reducer function must return a state
  console.log("Action Type: ", action);
  switch (action.type) {
    case CART_ADD_ITEM: {
      const { productId } = action.payload;
      const exists = state.cartItems.some(
        (item) => item.productId === productId
      );

      return {
        ...state,
        cartItems: exists
          ? state.cartItems.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cartItems, { productId, quantity: 1 }],
      };
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case WISHLIST_ADD_ITEM:
      return state.wishList.includes(action.payload.productId)
        ? state
        : {
            ...state,
            wishList: [...state.wishList, action.payload.wishList],
          };

    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 1 },
});

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 12 },
});
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 12 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 12 },
});
