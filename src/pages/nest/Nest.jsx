import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/Contexts";
import WritingCenter from "../../components/WritingCenter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Nest = (props) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className="main">
        <Header />
        <div className='main-body'>
          <div className='body-left'>
            <Outlet />
          </div>
          <div className='body-right'>
            <WritingCenter />
            <div>相关推荐</div>
            <div>标签轮播</div>
            <Footer />
          </div>
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default Nest