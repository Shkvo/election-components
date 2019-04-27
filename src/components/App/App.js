import React, { useState, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import './App.scss';

const cnApp = cn('App');

const App = () => {
  return (
    <div className={cnApp()}>
      <Header title="Elections" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
