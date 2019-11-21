const SET_PLUS_VALUE = 'SET_PLUS_VALUE';
const SET_RESET = 'SET_RESET';
const SET_SHOW_SETTINGS = 'SET_SHOW_SETTINGS';
const SET_HIDE_SETTINGS = 'SET_HIDE_SETTINGS';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_START_VALUE = 'SET_START_VALUE';

let initialState = {
    startValue: 0,
    maxValue: 3,
    currentValue: 0,
    isShowHide: 'true'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLUS_VALUE: {
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        }
        case SET_RESET: {
            return {
                ...state,
                currentValue: state.startValue
            }
        }
        case SET_SHOW_SETTINGS: {
            return {
                ...state,
                isShowHide: false
            }
        }
        case SET_HIDE_SETTINGS: {
            return  {
                ...state,
                isShowHide: true,
                currentValue: state.startValue,
                maxValue: state.maxValue
            }
        }
        case SET_MAX_VALUE: {
            return  {
                ...state,
                maxValue: action.number
            }
        }
        case SET_START_VALUE: {
            return {
                ...state,
                startValue: action.number
            }
        }
        default:
            return state
    }

}

export const onPlusValue = () => ({type: SET_PLUS_VALUE});
export const onReset = () => ({type: SET_RESET});
export const onShowSettings = () => ({type: SET_SHOW_SETTINGS});
export const onHideSettings = () =>  ({type: SET_HIDE_SETTINGS});
export const onMaxValueChange = (number) => ({type: SET_MAX_VALUE,number});
export const onStartValueChange = (number) => ({type: SET_START_VALUE,number});

export default reducer;