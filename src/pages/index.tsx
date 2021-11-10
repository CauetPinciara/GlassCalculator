import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Home() {

  var [count, setCount] = useState("");
  const options = {
    speed: 400,
    max: 25
  };
  return (

    <div className={styles.body}>
      <Tilt options={options}>
        <div className={styles.container}>
          <div className={styles.calculator}>
            <input type="text" value={count} className={styles.value} />
            <span className={styles.clear} onClick={() => setCount("")}>c</span>
            <span onClick={() => setCount(count += "/")}>/</span>
            <span onClick={() => setCount(count += "*")}>*</span>
            <span onClick={() => setCount(count += "7")}>7</span>
            <span onClick={() => setCount(count += "8")}>8</span>
            <span onClick={() => setCount(count += "9")}>9</span>
            <span onClick={() => setCount(count += "-")}>-</span>
            <span onClick={() => setCount(count += "4")}>4</span>
            <span onClick={() => setCount(count += "5")}>5</span>
            <span onClick={() => setCount(count += "6")}>6</span>
            <span className={styles.plus} onClick={() => setCount(count += "+")}>+</span>
            <span onClick={() => setCount(count += "1")}>1</span>
            <span onClick={() => setCount(count += "2")}>2</span>
            <span onClick={() => setCount(count += "3")}>3</span>
            <span onClick={() => setCount(count += "0")}>0</span>
            <span onClick={() => setCount(count += "00")}>00</span>
            <span onClick={() => setCount(count += ".")}>.</span>
            <span className={styles.equal} onClick={() => setCount(eval(count))}>=</span>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

