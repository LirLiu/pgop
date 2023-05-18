import { useState } from "react";
import styles from "./component.module.scss";
import Tag from "./Tag";


const detail = {
  title: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
  type: "font-end,back-end,ai",
  content: '内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容',
  auth: 'lir',

}

const Card = () => {

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