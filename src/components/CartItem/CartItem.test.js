import { shallow } from "enzyme";
import React from "react";
import CartItem from "./CartItem";

it("renders CartItem component", () => {
  const item = { imageUrl: "url", name: "sampleName", price: 40, quantity: 1 };
  expect(shallow(<CartItem item={item} />)).toMatchSnapshot();
});
