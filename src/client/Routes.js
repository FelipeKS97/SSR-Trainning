import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'


export default [
    {
        ...HomePage,
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
        component: UsersListPage,
    }
]