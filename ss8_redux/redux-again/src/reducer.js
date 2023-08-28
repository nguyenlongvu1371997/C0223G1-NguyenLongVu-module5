import { GET_POSTS_SUCCESS,CREATE_POST, CREATE_POST_SUCCESS } from "./actions";

const myReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {posts: action.posts};
            break;
            // case CREATE_POST_SUCCESS:
            //     // console.log(action.payload)
            //     // // return { posts: [...state.posts, action.payload]};
            //     break;
        default:
            return state;
    }
};

export default myReducer;