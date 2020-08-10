import { GET_SEARCH, GET_FILTER } from './actionTypes';

export const getSearch = (value) => ({
  type: GET_SEARCH,
  payload: value
});

export const getFilter = (operation) => ({
  type: GET_FILTER,
  payload: operation
});