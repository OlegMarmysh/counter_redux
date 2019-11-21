import React from 'react';
import styles from './DisplayStart.module.css';

let DisplayStart = (props) => {
    let classRed = '';
    if (props.maxValue === props.currentValue) {
        classRed = styles.active
    }
    return (
        <div>
            <h1 className={classRed}>
                {props.currentValue}
            </h1>
        </div>
    )
}

export default DisplayStart;
