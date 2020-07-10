import { useReducer, useCallback } from 'react'
import axios from 'axios'
import { fetching, success, error, FETCHING, SUCCESS, ERROR } from '.'

export const initialState = {
  status: null,
  response: null,
}

const useApi = (endpoint, { verb = 'get', params = {} } = {}) => {
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

  const makeRequest = useCallback(async () => {
    dispatch(fetching())
    try {
      const response = await axios[verb](endpoint, params)
      dispatch(success(response))
    } catch (e) {
      dispatch(error(e))
    }
  }, [endpoint, verb, params])

  return [state, makeRequest]
}

export default useApi
