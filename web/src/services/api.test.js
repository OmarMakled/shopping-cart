import axios from "axios";
import {getProducts} from "./api";

jest.mock("axios");

test("#getProducts", () => {
  const users = [{name: "Bob"}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  getProducts().then((list) => {
    expect(list).toEqual(users);
  });
});
