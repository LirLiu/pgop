import { useState } from "react";
import styles from './home.module.scss'
import Header from "../../components/Header";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";
import { ThemeContext } from "../../utils/Contexts";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className="main">
        <Header />
        {/* <HomeMain /> */}
        <Outlet />

      </main>
    </ThemeContext.Provider >
  )
}
export default Home;