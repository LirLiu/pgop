// 采取全局样式，非组件封装方法
import { useState, useCallback, useEffect, useMemo, useContext } from "react";
import styles from './home.module.scss'
import Tab from '../../components/Tab'
import Card from "../../components/Card";
import WritingCenter from "./components/WritingCenter";
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


  return (
    <div className={styles.main}>
      <div className={styles.m_left}>
        {
          props.chidrenLeft
        }
        
      </div>
      <div className={styles.m_right} onClick={handledivClick}>
        {
          props.childrenRight
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})


const App = () => {
  
  return (<div>
    <HomeMain>

    </HomeMain>
  </div>)
}
export default connect(mapStateToProps)(HomeMain)