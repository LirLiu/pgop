import { useState } from "react";
import styles from './home.module.scss'

const HomeMain = () => {

  return (
    <div className={styles.main}>
      <div>目录选择及其他</div>
      <div>今日推荐</div>
      <div>热门文章</div>
      <div>今日问答</div>
      <div>热门问答</div>
    </div>
  )
}

export default HomeMain