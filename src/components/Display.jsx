/* eslint-disable react/prop-types */
import styles from "./Display.module.css";
const Display = ({calvalue}) => {
  return (
    <input type="textarea" className={styles.display}  readOnly value={calvalue}/>
  )
}
export default Display;