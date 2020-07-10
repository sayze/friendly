export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const fetching = () => ({ type: FETCHING })
export const success = response => ({ type: SUCCESS, response })
export const error = response => ({ type: ERROR, response })

export { default } from './useApi'
