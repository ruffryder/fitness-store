import { shallow } from "enzyme";
import React from "react";
import CartIcon from "./CartIcon";

let wrapper;

beforeEach(() => {
  const mockProps = {
    toggleCart: jest.fn(),
    itemCount: 0
  };
  wrapper = shallow(<CartIcon {...mockProps} />);
});

describe("Cart Icon functionality", () => {
  it("renders CartIcon component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
