/* eslint-disable react/prop-types */
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({HandleOnclick}) => {
  let buttons = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    "00",
    ".",
    "="
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((Button) => (
        <button key={Button} className={styles.Buttons} onClick={()=> HandleOnclick(Button)}>
          {Button}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
