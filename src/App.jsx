/* eslint-disable react/prop-types */
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calvalue, setcalvalue] = useState("");
  const HandleOnclick = (Button) => {
    if (Button === "C") setcalvalue("");
    else if (Button === "=") {
      const result = eval(calvalue);
      setcalvalue(result);
    } else {
      let newcalvalue = calvalue + Button;
      setcalvalue(newcalvalue);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display calvalue={calvalue} />
        <ButtonsContainer HandleOnclick={HandleOnclick} />
      </div>
    </center>
  );
}

export default App;
