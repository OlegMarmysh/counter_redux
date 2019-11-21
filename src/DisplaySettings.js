import React from 'react';
import styles from './DisplaySettings.module.css';

let DisplaySettings = (props) => {
    let onMaxValueTitleChange = (e) => {
        props.onMaxValueChange(+e.currentTarget.value)
    }
    let onStartValueTitleChange = (e) => {
        props.onStartValueChange(+e.currentTarget.value)
    }
    let classError = (props.startValue >= props.maxValue || props.startValue<0) ? styles.border : ''
    return (
        <div className={styles.displayInput}>
            <div >
                    <span>
                        max value: <input className={classError}
                                          type='number'
                                          value={props.maxValue}
                                          onChange={onMaxValueTitleChange}/>
                    </span>
            </div>
            <div>
                    <span >
                        start value: <input className={classError}
                                            type='number'
                                            value={props.startValue}
                                            onChange={onStartValueTitleChange}/>
                    </span>
            </div>
        </div>
    )
}



export default DisplaySettings;
