import React, { useState } from "react";
import "./down.css";
function Down({ first, setFirst, second, setSecond }) {
  const [calc_action, setCalcAction] = useState("");

  const cutBtn = () => {
    const newstring = first.slice(0, -1);
    setFirst(newstring);
  };

  const btnClick = (btn) => {
    if (first === "") {
      setFirst(btn);
    } else {
      let str = first + btn;
      setFirst(str);
    }
  };
  const deleteBtn = () => {
    setFirst("");
    setSecond("");
  };

  const calculate = (action) => {
    let first_integer = parseFloat(first);
    let second_integer = parseFloat(second);

    switch (action) {
      case "+":
        if (!first && second) {
          setCalcAction("+");
          setSecond(`${second} ${calc_action}`);
          return;
        }
        if (!first) return;

        setCalcAction("+");
        setSecond(`${first} ${calc_action}`);
        setFirst("");

        break;
      case "-":
        if (!first && second) {
          console.log(second);
          setCalcAction("-");
          setSecond(`${second} -`);
          return;
        }
        if (!first) return;

        setCalcAction("-");
        setSecond(`${first} -`);
        setFirst("");
        break;
      case "/":
        if (!first && second) {
          console.log(second);
          setCalcAction("/");
          setSecond(`${second} /`);
          return;
        }
        if (!first) return;

        setCalcAction("/");
        setSecond(`${first} /`);
        setFirst("");
        break;
      case "*":
        if (!first && second) {
          console.log(second);
          setCalcAction("*");
          setSecond(`${second} *`);
          return;
        }
        if (!first) return;

        setCalcAction("*");
        setSecond(`${first} x`);
        setFirst("");
        break;
      case "=":
        if (!first_integer || !second_integer) return;
        if (calc_action === "+") {
          const calc = first_integer + second_integer;
          setSecond(calc);
          setFirst("");
          setCalcAction("");
        }
        if (calc_action === "-") {
          const calc1 = second_integer - first_integer;
          setSecond(calc1);
          console.log(calc1);
          setFirst("");
          setCalcAction("");
        }
        if (calc_action === "/") {
          const calc2 = second_integer / first_integer;
          setSecond(calc2);
          setFirst("");
          setCalcAction("");
        }
        if (calc_action === "*") {
          const calc2 = second_integer * first_integer;
          setSecond(calc2);
          setFirst("");
          setCalcAction("");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="down_calc">
      <button onClick={() => deleteBtn()}>AC</button>
      <button onClick={() => cutBtn()}>Del</button>
      <button onClick={() => btnClick("0")}>0</button>
      <button onClick={() => btnClick("1")}>1</button>
      <button onClick={() => btnClick("2")}>2</button>
      <button onClick={() => btnClick("3")}>3</button>
      <button onClick={() => btnClick("4")}>4</button>
      <button onClick={() => btnClick("5")}>5</button>
      <button onClick={() => btnClick("6")}>6</button>
      <button onClick={() => btnClick("7")}>7</button>
      <button onClick={() => btnClick("8")}>8</button>
      <button onClick={() => btnClick("9")}>9</button>
      <button onClick={() => btnClick(".")}>.</button>
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("/")}>/</button>
      <button onClick={() => calculate("*")}>x</button>

      <button className="equals" onClick={() => calculate("=")}>
        {" "}
        ={" "}
      </button>
    </div>
  );
}

export default Down;
