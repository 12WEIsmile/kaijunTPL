import * as types from '../constants/ActionTypes.js';

export function testAction(text) {
    return { type: types.TEST_ACTION, text }
}