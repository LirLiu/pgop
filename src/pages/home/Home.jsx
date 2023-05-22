import { useState } from "react";
import styles from './home.module.scss'
import Header from "../../components/Header";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";
import { ThemeContext } from "../../utils/Contexts";

const Home = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <Header />
        <HomeMain />
      </>
    </ThemeContext.Provider >
  )
}
export default Home;