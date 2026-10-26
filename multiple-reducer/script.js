import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";
import { combineReducers } from "redux";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ITEM_INCREASE_QUANTITY,
  CART_ITEM_DECREASE_QUANTITY,
} from "./cartReducer";
import {
  cartItemAdd,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  cartItemRemove,
} from "./cartReducer";

import { wishListAddItem, wishListRemoveItem } from "./wishListReducer";
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./wishListReducer";

// Create a custom combineReducers
// function combineReducers(reducers) {
//   const reducerKeys = Object.keys(reducers);

//   return function (state = {}, action) {
//     const nextState = {};
//     for (let i = 0; i < reducerKeys.length; i++) {
//       const key = reducerKeys[i];
//       const reducer = reducers[key];
//       const previousStateForKey = state[key];
//       const nextStateForKey = reducer(previousStateForKey, action);
//       nextStateForKey[key] = nextStateForKey;
//     }
//     return nextState;
//   };
// }
// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// });

const reducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

// Old way
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 1, quantity: 1 },
// });

// store.dispatch({
//   type: CART_REMOVE_ITEM,
//   payload: { productId: 1 },
// });

// store.dispatch({
//   type: CART_ITEM_INCREASE_QUANTITY,
//   payload: { productId: 12 },
// });

// store.dispatch({
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 12 },
// });

// store.dispatch({
//   type: WISHLIST_ADD_ITEM,
//   payload: { productId: 12 },
// });

// store.dispatch({
//   type: WISHLIST_REMOVE_ITEM,
//   payload: { productId: 12 },
// });

// New Approach
store.dispatch(cartItemAdd(1, 1));
store.dispatch(cartItemRemove(1));
store.dispatch(increaseCartItemQuantity(1));
store.dispatch(decreaseCartItemQuantity(1));
store.dispatch(wishListAddItem(1));
store.dispatch(wishListRemoveItem(1));
