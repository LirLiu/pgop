import { useState } from "react";
import styles from "./component.module.scss";
import Tag from "./Tag";

const Card = (props) => {
  const {detail} = props;

  return (
    <div className={styles.card}>
      <div className={styles.c_header}>
        {detail.type.split(',').map(item => (<Tag type={item}></Tag>))}
        <a href="javascript:;">{detail.title}</a>
      </div>
      <div className={styles.c_content}>{detail.content}</div>
    </div>
  )
}

export default Card;