import { get, post } from '../utils/fetch'

export const UPDATEUSER = 'GETUSER'

export const GETFOOTERLINKES = 'GETFOOTERLINKES'

export function getFooterlinkes() {
  return async (dispatch) => {
    try {
      const res = await get('/api/links')
      dispatch({ type: GETFOOTERLINKES, payload: res })
    } catch (error) {}
  }
}
