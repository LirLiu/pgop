import { memo } from "react"
import styles from './component.module.scss'

const Card = memo((props) => {
  const { tabList, activeTabKey, onTabChange } = props
  return (
    <div className={styles.tab}>
      {
        tabList.map(item => {
          return (<a className={item.key === activeTabKey ? styles.t_light : styles.t_dark} key={item.key} onClick={() => onTabChange(item.key)} href="javascript:;">{item.tab}</a>)
        })
      }
    </div>
  )
})


export default Card