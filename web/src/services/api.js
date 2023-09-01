import axios from "axios";
import {API_URL} from "../config";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/products`)
      .then((respose) => {
        resolve(respose.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
