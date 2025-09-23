import { useEffect, useState } from "react";

import styles from './ControlledInput.module.css'

const ControledInput = ({ handler, debounceInterval, placeholder, resetSignal}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        let timerId = null;
        //not working properly, the timerId is redeclared to null on every invoke and 
        //setTimeout cann't be reseted
        setInputValue(e.target.value);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            handler(e.target.value);
        }, debounceInterval);
    }

    useEffect(() => setInputValue(''), [resetSignal]);

    return (
        <input className={styles.controlledTextInput} type="text" name="" id="" value={inputValue} placeholder={placeholder} onChange={e => handleInput(e)} />
    )
}

export default ControledInput;