export const NOOP = 'noop'
export const FETCHING = 'fetching'
export const SUCCESS = 'success'
export const ERROR = 'error'

// Type creators.
export const fetching = () => ({ type: FETCHING })
export const success = response => ({ type: SUCCESS, response })
export const error = response => ({ type: ERROR, response })
