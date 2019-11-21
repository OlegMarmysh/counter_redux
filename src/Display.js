import React from 'react';
import styles from './Display.module.css';
import DisplayStart from "./DisplayStart";
import DisplaySettings from "./DisplaySettings";

let Display = (props) => {
    return (
        <div className={styles.display}>
            {props.isShowHide && <div>
                <DisplayStart maxValue={props.maxValue} currentValue={props.currentValue}/>
            </div>}
            {!props.isShowHide && <div>
                <DisplaySettings maxValue={props.maxValue}
                                 startValue={props.startValue}
                                 onMaxValueChange={props.onMaxValueChange}
                                 onStartValueChange={props.onStartValueChange}/>
        </div>}
        </div>
    )
}



export default Display;
