import { useState, useMemo } from "react";
import styles from "./component.module.scss";

const INVISIBLE = ''
const FONT_END = 'font-end'
const FONT_END_LABEL = '前端'
const BACK_END = "back-end"
const BACK_END_LABEL = "后端"
const BIG_DATA = "big-data"
const BIG_DATA_LABEL = "大数据"
const AI = 'ai'
const AI_LABEL = '人工智能'



const Tag = (props) => {
  const { type } = props
  const tagName = useMemo(() => {
    switch (type) {
      case INVISIBLE:
        return INVISIBLE
      case FONT_END:
        return FONT_END_LABEL
      case BACK_END:
        return BACK_END_LABEL;
      case BIG_DATA:
        return BIG_DATA_LABEL;
      case AI:
        return AI_LABEL;
      default:
        return '';
    }
  })

  return (
    <span className={ styles.tag_visible}>
      {tagName}
    </span>
  )
}

export default Tag