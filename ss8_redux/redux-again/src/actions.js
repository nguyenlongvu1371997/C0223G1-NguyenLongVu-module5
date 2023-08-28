import { type } from "@testing-library/user-event/dist/type";


export const GET_POSTS_FETCH = 'GET_POSTS_FETCH';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const CREATE_POST = 'CREATE_POST';


export const getPostsFetch = () => ({
    type: GET_POSTS_FETCH
});

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});