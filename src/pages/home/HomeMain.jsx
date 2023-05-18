import { useState, useCallback, useEffect, useMemo, useContext } from "react";
import styles from './home.module.scss'
import Tab from '../../components/Tab'
import Card from "../../components/Card";
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
  const [data, setData] = useState([])

  useEffect(() => {
    console.log(process.env,'adsfaodfnasod')
    get('/api/articles')
    .then(res=>{
      console.log(res,'res')
      setData(res)
    }).catch(err => {
      throw new Error(err)
    })
    console.log(theme)
  }, [])

  useEffect(() => {
    console.log(data,'data')
  },[data])

  
  const contentListNoTitle = {
    concern: <p>article content</p>,
    recommend: <Card></Card>,
    hot: <p>project content</p>,
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
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
    </div>
  )
}

export default HomeMain