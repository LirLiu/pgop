import { useState } from "react";
import styles from './home.module.scss'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}
export default Home;