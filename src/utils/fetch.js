// GET, POST, PUT, DELETE
// fetch封装1.0版本
// export async function request(url, options) {
//   try {
//     const response = await fetch(url, options)
//     if (response.ok) {
//       const jsonRes = await response.json()
//       return jsonRes
//     } else {
//       throw new Error('错误信息:' + response.status, response.statusText)
//     }
//   } catch (error) {
//     throw new Error('错误信息:' + error)
//   }
// }
// fetch封装2.0版本
export const request = (url, options) => {
  return fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
// get请求
export const get = (url = '') => {
  return request(url, {
    method: 'GET',
  })
}
// post请求
export const post = (url = '', data = {}) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
