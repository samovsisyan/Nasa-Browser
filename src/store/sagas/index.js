import { all, fork } from "redux-saga/effects";
import apod from "./apod";

export default function* root() {
    const sagas = [
        apod,
    ];
    yield all(sagas.map(fork));
}