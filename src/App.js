import React from 'react';
import styles from './App.module.css';
import Display from "./Display";
import Buttons from "./Buttons";


let App = (props) => {
    return (
        <div className={styles.app}>
            <Display {...props}
            />
            <Buttons {...props}
            />
        </div>
    )
}

export default App;
