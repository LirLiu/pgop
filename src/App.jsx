// App.js主要做路由配置
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/Home'

import { store } from './store/index'
import { Provider } from 'react-redux'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />} />
  )
)

function App() {
  return (
    <Provider store={store}>
      <main className='main'>
        <RouterProvider router={router} />
      </main>
    </Provider>
  );
}

export default App;
