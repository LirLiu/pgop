import { get, post } from '../utils/fetch'

export const GETFOOTERLINKES = 'GETFOOTERLINKES'

export const GETARTICLES = 'GETARTICLES'

export function getFooterlinkes() {
  return async (dispatch) => {
    try {
      const res = await get('/api/links')
      dispatch({ type: GETFOOTERLINKES, payload: res })
    } catch (error) {}
  }
}

export const getArticles = () => {
  return (dispatch) => {
    get('/api/articles')
      .then((res) => {
        dispatch({ type: GETARTICLES, payload: res })
      })
      .catch((error) => {
        console.log(error, '错误打印')
      })
  }
  // return async (dispatch) => {
  //   try {
  //     const res = await get('/api/articles')
  //     dispatch({ type: GETARTICLES, payload: res })
  //   } catch (error) {}
  // }
}
