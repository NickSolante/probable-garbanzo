import { SEARCH_ITEMS, SET_LOADING, CLEAR_ITEMS } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return {
        ...state,
        items: [],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_ITEMS:
      return {
        ...state,
        users: [],
        loading: false
      }

    default:
      return state
  }
}
