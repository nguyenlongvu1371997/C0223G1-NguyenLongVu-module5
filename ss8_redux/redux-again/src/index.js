import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import myReducer from './reducer';
import mySaga from './sagas';
import PostList from './components/ListPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';


const sagaMiddleWare = createSagaMiddleWare();
const rootReducer = combineReducers({ myReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostList />}></Route>
          <Route path='/create' element={<CreatePost />}></Route>
        </Routes >
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
