import React, {useState} from "react";
import "../styles/calc.css"

const Calculadora = ()=>{

const [input, setInput] = useState('');
const [result, setResult] = useState('');

const handleClick = (value)=>{
    setInput((prev) => prev + value)
}

const handleClear =() =>{
    setInput('')
    setResult('')
}

const handleCalculate = ()=>{
    try {
        setResult(eval(input))
    } catch (error) {
        setResult(error)
    }
}


return (

    <div className="calculator">
        <div className="display">
            <input type="text" value={input} readOnly></input>
            <div className="result">{result}</div>
        </div>
        <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClear()}>C</button>
        </div>

    </div>
)
}
export default Calculadora