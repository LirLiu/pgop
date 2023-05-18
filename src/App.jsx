// App.js主要做路由配置
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/Home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />} />
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;