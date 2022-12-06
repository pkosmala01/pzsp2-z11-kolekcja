import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import Header from '../components/Header';

import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';
import CollectionsListPage from '../pages/CollectionsListPage';

const routes = [
  {
    title: 'home',
    link: '/'
},
  {
      title: 'collection',
      link: '/collectionsList'
  },
]

const App = () => {
  return (
    <>
      <></>
      <Routes>
        <Route path='/' element={<Layout routes={routes}/>}>
          <Route path='frontend/dist/index.html' element={ <Navigate replace to='/' /> }/>
          <Route path='dist/index.html' element={ <Navigate replace to='/' /> }/>
          <Route path='' element={<HomePage />}/>
          <Route path='collectionsList' element={<CollectionsListPage />}/>
        </Route>
      </Routes>
    </>

  );
}

export default App;
