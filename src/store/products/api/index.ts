import axios from '../../../axiosInstance';
import { IProduct } from '../types';

export const getProducts = () => axios.get<IProduct[]>('/products');
