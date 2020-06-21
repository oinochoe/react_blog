import React, { useEffect } from 'react';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
});

const WriteActionButtonsContainer = () => {
    return <div></div>;
};

export default WriteActionButtonsContainer;
