import React from 'react'
import App from "./App";
import {connect} from "react-redux";
import {
    onHideSettings,
     onMaxValueChange,
     onPlusValue,
     onReset,
     onShowSettings,
     onStartValueChange,
} from "./reducer";

class AppContainer extends React.Component {
    render =() =>{
        return (
            <App {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        startValue: state.startValue,
        maxValue: state.maxValue,
        currentValue: state.currentValue,
        isShowHide: state.isShowHide
    }
}


export default connect(mapStateToProps, {
    onPlusValue,
    onReset,
    onShowSettings,
    onHideSettings,
    onMaxValueChange,
    onStartValueChange})(AppContainer);