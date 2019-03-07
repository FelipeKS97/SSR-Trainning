export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchUsers = () => async (dispatch, getState, api) => {
    try {
        const res = await api.get('/users');

        dispatch({
            type: FETCH_USERS,
            payload: res
        })
    } catch(error) {
        console.log(error)
    }
}


export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    try {
        const res = await api.get('/current_user');

        dispatch({
            type: FETCH_CURRENT_USER,
            payload: res
        })
    } catch(error) {
        console.log(error)
    }
}