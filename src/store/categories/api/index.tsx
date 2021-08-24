import axios from '../../../axiosInstance';

export const getCategories = () => axios.get<string[]>('/products/categories');
