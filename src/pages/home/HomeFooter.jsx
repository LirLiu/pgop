import { useState } from "react";
import styles from './home.module.scss'
import { Link } from "react-router-dom";
import Promonkey from '../../assets/images/promonkey.jpg'

const DirectLink = [
  {
    title: 'React',
    en_title: 'react',
    link: 'https://react.docschina.org/'
  },
  {
    title: 'Vue',
    en_title: 'vue',
    link: 'https://cn.vuejs.org/'
  },
  {
    title: '网道',
    en_title: 'wangDoc',
    link: 'https://wangdoc.com/'
  },
]

const HomeFooter = () => {

  return (
    <div className={styles.footer}>
      <div><img src={Promonkey} alt="程序猿" /></div>
      <span>© 2023 , pgop Inc.</span>
      <div>
        {
          DirectLink.map(item => <Link key={item.en_title} to={item.link}>{item.title}</Link>)
        }
      </div>
    </div>
  )
}

export default HomeFooter