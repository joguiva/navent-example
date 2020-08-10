import { GET_SEARCH, GET_FILTER } from './actionTypes';
import items from '../data/data'

const defaultState = items;

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH: {
      return items.filter((n) => {
        return (
          n.posting_location.address.toLowerCase().includes(payload.toLowerCase()) ||
          n.posting_location.zone.toLowerCase().includes(payload.toLowerCase()) ||
          n.posting_location.city.toLowerCase().includes(payload.toLowerCase())
        )
      })
    }
    case GET_FILTER: {
      
      return payload === '0' ? items : items.filter(n => n.operation_type.operation_type_id.toString() === payload)
    }

    default:
      return state;
  }
}

export default reducer;