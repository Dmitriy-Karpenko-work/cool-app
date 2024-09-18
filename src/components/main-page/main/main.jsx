import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../../Pages/Homepage/Homepage';
import { HW } from '../../Pages/HW/HW';

export const Main = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/HW/*" element={<HW />} /> 
      </Routes>
    </div>
  );
};