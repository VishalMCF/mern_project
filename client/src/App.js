import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Landing/>
    </Fragment>
  );
}

export default App;
