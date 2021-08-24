import { IProductCart } from '../store/cart/types';

export const limitCharacters = (str: string) => `${str.substr(0, 300)}...`;

export const getTotalItems = (products: IProductCart[]) => {
  return products.reduce((acc, curr) => {
    return acc + Number(curr.quantity);
  }, 0);
};

export const getSubTotal = (products: IProductCart[]) => {
  return products.reduce((acc, curr) => {
    return acc + Number(curr.quantity) * curr.price;
  }, 0);
};
