// App.js主要做路由配置
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Nest from './pages/layout/Layout'
import Home from './pages/home/Home'
import HomeFollow from './pages/home/HomeFollow'
import HomeHot from './pages/home/HomeHot'
import HomeLatest from './pages/home/HomeLatest'
import FontEnd from './pages/fontend/FontEnd'
import NoMatch from './pages/nomatch/NoMatch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nest />}>
          <Route path='/' element={<Home />}>
            <Route path='follow' element={<HomeFollow />} ></Route>
            <Route path="hot" element={<HomeHot />}></Route>
            <Route path="latest" element={<HomeLatest />}></Route>
          </Route>

          <Route path='frontend' element={<FontEnd />}></Route>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
