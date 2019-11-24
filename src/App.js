import React from 'react';
import styles from './App.module.css';
import Display from "./Display";
import Buttons from "./Buttons";
import {connect} from "react-redux";
import {onHideSettings, onMaxValueChange, onPlusValue, onReset, onShowSettings, onStartValueChange} from "./reducer";

let App = (props) => {
    return (
        <div className={styles.app}>
            <Display {...props}/>
            <Buttons {...props}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    startValue: state.startValue,
    maxValue: state.maxValue,
    currentValue: state.currentValue,
    isShowHide: state.isShowHide
});

export default connect(mapStateToProps,{onPlusValue,onReset,onShowSettings,onHideSettings,onMaxValueChange,onStartValueChange})(App);
