import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceList from './components/ListService';
import ListCustomer from './components/ListCustomer';
import ContractList from './components/ListContract';
import Home from './components/Home';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import AddContract from './components/AddContract';
import EditContract from './components/EditContract';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/serivice/list' element={<ServiceList/>} />
      <Route path='/contract/list' element={<ContractList/>} />
      <Route path='/customer/list' element={<ListCustomer/>} />
      <Route path='/customer/create' element={<AddCustomer/>} />
      <Route path='/customer/edit/:id' element={<EditCustomer/>} />
      <Route path='/contract/create' element={<AddContract/>} />
      <Route path='/contract/edit/:id' element={<EditContract/>} />
    </Routes>
  </BrowserRouter>
);


