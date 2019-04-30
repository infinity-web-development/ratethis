import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

// import rootSaga from '../components/rootSaga';
import rootReducer from '../components/rootReducer';

const saga = createSagaMiddleware();

const initializeStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(saga)
    );

    // saga.run(rootSaga);

    return store;
};

export default initializeStore;