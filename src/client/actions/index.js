import { get } from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async dispatch => {
    const res = await get('http://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}