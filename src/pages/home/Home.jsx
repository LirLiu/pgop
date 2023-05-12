import { useState } from "react";
import styles from './home.module.scss'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </>
  )
}
export default Home;