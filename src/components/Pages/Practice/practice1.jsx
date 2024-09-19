import React from 'react';
import SwitchComponent from '../../switchTheme/SwitchTheme';
import { useTheme } from '../../../contexts/ThemeContext';
import { Switch } from '@mui/material';

export const Practice1 = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <SwitchComponent onChange={toggleTheme}>
        
      </SwitchComponent>
      <button onClick={toggleTheme} className='light'>Сменить тему</button>
      <Switch onChange={toggleTheme}></Switch>
    </>
  );
};