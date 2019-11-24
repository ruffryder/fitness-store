import { shallow } from "enzyme";
import React from "react";
import PageNotFoundPage from "./PageNotFoundPage";

it("expect to render PageNotFound component", () => {
  expect(shallow(<PageNotFoundPage />)).toMatchSnapshot();
});
