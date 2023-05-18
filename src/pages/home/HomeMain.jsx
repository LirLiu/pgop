import { useState, useCallback, useEffect, useMemo, useContext } from "react";
import styles from './home.module.scss'
import Tab from '../../components/Tab'
import Card from "../../components/Card";
import WritingCenter from "./components/WritingCenter";
import { ThemeContext } from "../../utils/Contexts";
import { get } from '../../utils/fetch'


const tabListNoTitle = [
  {
    tab: '关注',
    key: 'concern',
  },
  {
    tab: '推荐',
    key: 'recommend',
  },
  {
    tab: '热榜',
    key: 'hot',
  }
];

const HomeMain = () => {
  const [activeTabKey, setActiveTabKey] = useState('recommend');
  const { theme, setTheme } = useContext(ThemeContext)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    get('/api/articles')
    .then(res=>{
      setArticles(res)
    }).catch(err => {
      throw new Error(err)
    })
  }, [])

  const contentListNoTitle = {
    concern: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
    recommend: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
    hot: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
  };
  const handledivClick = () => {
    setTheme(`${Math.random()}`)
    console.log(theme)
  }
  const onTabChange = useCallback((key) => {
    console.log('wogoujianl')
    setTheme(`night${1 + Math.random()}`)
    setActiveTabKey(key);
  }, [activeTabKey])

  const farmarJisuan = (key) => {
    console.log('hahahahahhahaha')
    return key === 'hot' ? '热榜' : '其他'
  }
  const jieguo = useMemo(() => {
    return farmarJisuan(activeTabKey)
  }, [activeTabKey])
  return (
    <div className={styles.main}>
      <div className={styles.m_left}>
        <Tab
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
        >
        </Tab>
        {contentListNoTitle[activeTabKey]}
        {/* {jieguo} */}
      </div>
      <div className={styles.m_right} onClick={handledivClick}>
        <WritingCenter/>
        <div>轮播小类分类板块</div>
        <div>与我相关的页面：如我的收藏，我关注的问题，版权服务中心等等</div>
        <div>版权信息内容</div>
      </div>
    </div>
  )
}

export default HomeMain