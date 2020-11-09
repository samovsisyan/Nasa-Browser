import { all, fork } from "redux-saga/effects";
// import blog from "./blog";

export default function* root() {
    const sagas = [
        // blog,
    ];
    yield all(sagas.map(fork));
}