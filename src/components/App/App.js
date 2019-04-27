import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { cn } from '@bem-react/classname';
import './App.scss';

const cnApp = cn('App');

const App = () => {

  return (
    <div className={cnApp()}>
      <Button
        variant="contained"
        color="primary"
      >
        Hello World
      </Button>
    </div>
  );
};

export default App;
