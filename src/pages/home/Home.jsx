import { useState, useEffect, } from "react";
import Tab from '../../components/Tab'
import Card from "../../components/Card";
import { connect } from "react-redux";
import { getArticles } from "../../store/action.js";


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

const Home = (props) => {
  const { dispatch, articles } = props
  const [activeTabKey, setActiveTabKey] = useState('recommend');

  useEffect(() => {
    dispatch(getArticles())
  }, [])

  const contentListNoTitle = {
    concern: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
    recommend: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
    hot: <div>{articles.map(item => <Card key={item.id} detail={item}></Card>)}</div>,
  };

  const onTabChange = (key) => {
    setActiveTabKey(key);
  }
  return (
    <>
      <Tab
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
      >
      </Tab>
      {contentListNoTitle[activeTabKey]}
    </>
  )
}

const mapStateToProps = (state) => ({
  articles: state.present.articles
})

export default connect(mapStateToProps)(Home)