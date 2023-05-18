// GET, POST, PUT, DELETE
export async function request(url, options) {
  try {
    const response = await fetch(url, options)
    console.log(response, '打印response所有数据')
    if (response.ok) {
      const jsonRes = await response.json()
      console.log(jsonRes, '打印此时json化数据')
      return jsonRes
    } else {
      throw new Error('错误信息:' + response.status, response.statusText)
    }
  } catch (error) {
    throw new Error('错误信息:' + error)
  }
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
