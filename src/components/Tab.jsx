import { memo, useMemo } from "react"
import { NavLink } from "react-router-dom"
import styles from './component.module.scss'

const Tab = memo((props) => {
  const { tabList } = props

  const activeClassName = ({ isAcitve }) => isAcitve ? styles.t_light : styles.t_dark

  return (
    <div className={styles.tab}>
      {
        tabList.map(item => <NavLink
          className={activeClassName}
          key={item.mark}
          to={item.path}
          // state={{ mark: item.mark }}
        >{item.label}</NavLink>)
      }
    </div >
  )
})

export default Tab