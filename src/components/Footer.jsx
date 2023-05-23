import { Link, useLocation } from "react-router-dom";
import styles from './component.module.scss'
import { connect } from "react-redux";
import { getFooterlinkes } from "../store/action";
import { useEffect } from "react";

const Footer = (props) => {
  const { dispatch, links } = props
  const location = useLocation();

  useEffect(() => {
    dispatch(getFooterlinkes());
  }, [])

  return (
    <div>
      <span>程序猿</span>
      <span>© 2023 , pgop Inc.</span>
      <div>
        {
          // DirectLink.map(item => <Link key={item.en_title} to={item.link}>{item.title}</Link>)
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  links: state.present.links,
})
export default connect(mapStateToProps)(Footer)