import * as types from "./cart.types";
import cartReducer from "./cart.reducer";

describe("Toggle Cart Hidden", () => {
  const initialState = {
    hidden: true,
    cartItems: []
  };
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {}).hidden).toEqual(true);
  });
  it("should handle toggleCart change", () => {
    expect(
      cartReducer(initialState, { type: types.TOGGLE_CART_HIDDEN }).hidden
    ).toEqual(false);
  });
});

describe("Cart item actions", () => {
  const initialState = {
    hidden: true,
    cartItems: []
  };
  it("Should add an item to cart", () => {
    expect(
      cartReducer(initialState, {
        type: types.ADD_ITEM,
        payload: {
          id: 1,
          name: "test item",
          imageUrl: "dummyUrl",
          price: 10,
          quantity: 1
        }
      }).cartItems.length
    ).toEqual(1);
  });
});
