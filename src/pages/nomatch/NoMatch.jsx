import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h2>这里什么都没有哦!</h2>
      <p>
        <Link to="/">跳转至首页</Link>
      </p>
    </div>
  );
}

export default NoMatch;