import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../../Pages/Homepage/Homepage';
import { HW } from '../../Pages/HW/HW';
import { Practice1 } from '../../Pages/Practice/practice1';

export const Main = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/HW/*" element={<HW />} /> 
        <Route path="/practice/*" element={<Practice1 />} /> 
      </Routes>
    </div>
  );
};