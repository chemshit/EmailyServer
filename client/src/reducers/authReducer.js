import { FETCH_USER } from '../actions/types';

/**
 * 
 * @param {*} state existing state
 * @param {*} action check action
 * @returns null if we are waiting to learn user authentication siutaiton
 * @returns User Model if user logged in
 * @returns false user is not logged in
 */

export default function (state = null, action) {
    switch (action.type) {
        case (FETCH_USER):
            return action.payload || false;
        default:
            return state;
    }
}