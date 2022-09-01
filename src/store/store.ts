import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { rootSaga } from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

export const allReducers = combineReducers ({

});

export const store = configureStore ({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;