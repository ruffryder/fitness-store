import * as actions from "./cart.actions";
import * as types from "./cart.types";

it("should create an action to toggle cart", () => {
  const expectedAction = {
    type: types.TOGGLE_CART_HIDDEN
  };
  expect(actions.toggleCartHidden()).toEqual(expectedAction);
});

it("should create an action to add item", () => {
  const item = {};
  const expectedAction = {
    type: types.ADD_ITEM,
    payload: item
  };
  expect(actions.addItem(item)).toEqual(expectedAction);
});

it("should create an action to remove item from cart", () => {
  const itemToRemove = {};
  const expectedAction = {
    type: types.REMOVE_ITEM,
    payload: itemToRemove
  };
  expect(actions.removeItem(itemToRemove)).toEqual(expectedAction);
});

it("should create an action to clear an item from cart", () => {
  const itemToClear = {};
  const expectedAction = {
    type: types.CLEAR_ITEM_FROM_CART,
    payload: itemToClear
  };
  expect(actions.clearItemFromCart(itemToClear)).toEqual(expectedAction);
});

it("should create an action to clear cart", () => {
  const expectedAction = {
    type: types.CLEAR_CART
  };
  expect(actions.clearCart()).toEqual(expectedAction);
});
