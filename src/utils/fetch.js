// GET, POST, PUT, DELETE
export async function request(url, options) {
  try {
    const response = await fetch(url, options)
    console.log(
      response.status,
      response.statusText,
      response.ok,
      '打印返回状态码及状态文本'
    )
    if (response.ok) {
      const jsonRes = await response.json()
      console.log(jsonRes,jsonRes.code, '打印此时状态码')
      if (jsonRes.code >= 200 && jsonRes.code < 300) {
        return jsonRes
      } else {
        throw new Error(
          '返回code：' + jsonRes.code + '，错误信息：' + jsonRes.code
        )
      }
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
