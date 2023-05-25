import Card from "../../components/Card";
import { connect } from "react-redux";
import { getArticles } from "../../store/action.js";
import { useEffect } from "react";

const HomeLatest = (props) => {
  const { dispatch, articles } = props;

  useEffect(() => {
    dispatch(getArticles(articles));
  }, [])

  return (
    <div>
      {
        // articles.map(item => <Card key={item.id} detail={item}></Card>)
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.present.articles,
})
export default connect(mapStateToProps)(HomeLatest)