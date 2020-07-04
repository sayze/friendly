import { useReducer, useCallback } from 'react'
import { FETCHING, SUCCESS, ERROR, NOOP, fetching, success, error } from './types'
import api from '.'
import { fakeFriends, fakeRequest } from './utils'

const initialState = { status: NOOP, response: {} }

const useApi = () => {
  const [state, dispatch] = useReducer((state, { type, response }) => {
    switch (type) {
      case FETCHING:
        return { ...initialState, status: FETCHING }
      case SUCCESS:
        return { ...state, status: SUCCESS, response }
      case ERROR:
        return { ...state, status: ERROR, response }
      default:
        return state
    }
  }, initialState)

  const makeRequest = useCallback((source, params = {}) => {
    dispatch(fetching())
    let requestProvider
    switch (source) {
      case api.DELETE_FRIEND:
        requestProvider = { message: 'User has been deleted' }
        break
      case api.UPDATE_FRIEND:
        requestProvider = { message: 'User has been updated' }
        break
      case api.ADD_FRIEND:
        requestProvider = { data: fakeFriends({ id: Math.floor(Date.now() / 1000), ...params }) }
        break
      default:
        requestProvider = { data: fakeFriends(4) }
        break
    }

    fakeRequest(requestProvider)
      .then(response => dispatch(success(response)))
      .catch(e => dispatch(error(e)))
  }, [])

  return [state, makeRequest]
}

export default useApi
