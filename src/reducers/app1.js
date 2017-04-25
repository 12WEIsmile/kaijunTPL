import {
    TEST_ACTION
} from '../constants/ActionTypes.js';


export default (state = ["默认文字"], action) => {
    let _state;
    switch (action.type) {
        case TEST_ACTION:
            if(!action.text) {
                return
            }
            _state = [
                action.text,
                ... state
            ]
            return _state;
            break;

        default:
            return state;
            break;
    }
}