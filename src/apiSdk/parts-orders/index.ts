import axios from 'axios';
import queryString from 'query-string';
import { PartsOrderInterface, PartsOrderGetQueryInterface } from 'interfaces/parts-order';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPartsOrders = async (
  query?: PartsOrderGetQueryInterface,
): Promise<PaginatedInterface<PartsOrderInterface>> => {
  const response = await axios.get('/api/parts-orders', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPartsOrder = async (partsOrder: PartsOrderInterface) => {
  const response = await axios.post('/api/parts-orders', partsOrder);
  return response.data;
};

export const updatePartsOrderById = async (id: string, partsOrder: PartsOrderInterface) => {
  const response = await axios.put(`/api/parts-orders/${id}`, partsOrder);
  return response.data;
};

export const getPartsOrderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parts-orders/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePartsOrderById = async (id: string) => {
  const response = await axios.delete(`/api/parts-orders/${id}`);
  return response.data;
};
