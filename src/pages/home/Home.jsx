import { useState } from "react";
import styles from './home.module.scss'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";
import { ThemeContext } from "../../utils/Contexts";

const Home = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={styles.home}>
        <HomeHeader />
        <HomeMain />
        {/* <HomeFooter /> */}
      </main>
    </ThemeContext.Provider >
  )
}
export default Home;