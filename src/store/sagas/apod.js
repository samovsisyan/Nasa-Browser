import {takeLatest, call, put} from 'redux-saga/effects';
import {APOD_REQUEST, APOD_SUCCESS, APOD_FAIL} from '../actions/apod';
import * as api from '../../api';

function* handleCategoriesRequest(action) {
    try {
        const data = yield call(api.getApod, action.payload.date);
        yield put({
            type: APOD_SUCCESS,
            payload: {apodData: data},
        });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        yield put({
            type: APOD_FAIL,
            message: e.message,
        });
    }
}


export default function* watchers() {
    yield takeLatest(APOD_REQUEST, handleCategoriesRequest);
}