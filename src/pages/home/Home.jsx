import Tab from '../../components/Tab'
import HomeRecommend from './HomeDefault';
import { Outlet, useLocation } from "react-router-dom";


const tabList = [
  {
    label: '关注',
    path: 'follow',
    mark: 1
  },
  {
    label: '推荐',
    path: '',
    mark: 0
  },
  {
    label: '热榜',
    path: 'hot',
    mark: 2
  },
  {
    label: '最新',
    path: 'latest',
    mark: 3
  }
];

const tabListWithRoute = tabList.map((item) => {
  console.log(item, item.path, 'asfdsafda');
  item.path = `/${item.path}`
  return item
})

const Home = (props) => {
  const location = useLocation();

  return (
    <>
      <Tab tabList={tabListWithRoute}></Tab>
      {location.pathname === '/' && <HomeRecommend />}
      <Outlet />
    </>
  )
}

export default Home