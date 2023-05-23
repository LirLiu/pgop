// App.js主要做路由配置
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home'
import FontEnd from './pages/fontend/FontEnd'
import HomeMain from './pages/home/HomeMain'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeMain />}></Route>
          <Route path='fontend' element={<FontEnd />}></Route>
        </Route>
        <Route path='*' element={
          <main style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              color: "red",
              fontSize: "24px",
            }}>这里什么都没有哦</div>
          </main>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
