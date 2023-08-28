import { call, put, takeEvery } from 'redux-saga/effects';
import { CREATE_POST, GET_POSTS_FETCH, GET_POSTS_SUCCESS, CREATE_POST_SUCCESS } from './actions';
import axios from 'axios';

async function postsFetch() {
    return (await axios.get('http://localhost:8080/posts')).data;
}

 function* createPost(payload) {
    yield axios.post('http://localhost:8080/posts', payload.payload);

}



function* workGetPostsFetch() {
    const posts = yield call(postsFetch);
    yield put({ type: GET_POSTS_SUCCESS, posts })
}



function* mySaga() {
    yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
    yield takeEvery(CREATE_POST, createPost)
}

export default mySaga;