import { GetUsers, DeleteUser } from "../service/Service";

export const getListUser = () => {
    return async (dispatch) => {
        const data = await GetUsers();
        console.log(data);
        dispatch({
            type: "LIST",
            payload: data,
        });
    };
};

export const deleteUserById = (id) => {
    return async (dispatch) => {
        await DeleteUser(id);
        const data = await GetUsers();
        dispatch({
            type: "DELETE",
            payload: data,
        });
    };
};