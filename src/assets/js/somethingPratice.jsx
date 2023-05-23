import { useState, useCallback, useEffect, useMemo, useContext } from "react";
import Tab from '../../components/Tab'
import Card from "../../components/Card";
// import WritingCenter from "./components/WritingCenter";
import { ThemeContext } from "../../utils/Contexts";
import { get } from '../../utils/fetch'
import { connect } from "react-redux";
import { UPDATEUSER } from "../../store/action.js";


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

const arr = [1, 32, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11,]
const HomeMain = (props) => {
  const { dispatch, user } = props
  const [activeTabKey, setActiveTabKey] = useState('recommend');
  const { theme, setTheme } = useContext(ThemeContext)
  const [articles, setArticles] = useState([])
  console.log(user, "user,shishenme ")

  useEffect(() => {

    arr.forEach(num => {
      console.log(num, 'number')
    })
    dispatch({ type: UPDATEUSER, payload: { age: 25 } })

    get('/api/articles')
      .then(res => {
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
    <div className='main-body'>
      <div className='body-left'>
        <Tab
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
        >
        </Tab>
        {contentListNoTitle[activeTabKey]}
        {/* {jieguo} */}
      </div>
      <div className='body-right'>
        {/* <WritingCenter /> */}
        <div>轮播小类分类板块</div>
        <div>与我相关的页面：如我的收藏，我关注的问题，版权服务中心等等</div>
        <div>版权信息内容</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(HomeMain)