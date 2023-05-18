module.exports = () => {
  const data = { article: [] }
  for (let i = 1; i <= 10; i++) {
    data.article.push({
      id: i,
      title: `本文标题有很多中形式，这是标题${i}`,
      content: `内容有哪些呢，这是主要内容${i},改内容长度还是有点不够啊，我该怎么办呢，当然是继续凑字数啦！`,
    })
  }
  return data
}
