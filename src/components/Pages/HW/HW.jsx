import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './HW.module.scss';
import { Hw1 } from './Hw1/Hw1';
import { Hw2 } from './Hw2/Hw2';
import { Hw3 } from './Hw3/Hw3';



export const HW = () => {
    const styleActiveLink = ({ isActive }) => {
      return isActive ? `${s.link} ${s.active}` : s.link;
    };
  
    return (
      <>
        <h1 className={s.hw_h1}>Домашние работы</h1>
        <nav className={s.nav_hw}>
          <NavLink className={styleActiveLink} to="/HW/1">
            Домашняя работа - 3
          </NavLink>
          <NavLink className={styleActiveLink} to="/HW/2">
            Домашняя работа - 4
          </NavLink>
          <NavLink className={styleActiveLink} to="/HW/3">
            Домашняя работа - 5
          </NavLink>
        </nav>
        <div className="hwContent">
          <Routes>
            <Route path="/1/*" element={<Hw1 />} />
            <Route path="/2/*" element={<Hw2 />} />
            <Route path="/3/*" element={<Hw3 />} />
          </Routes>
        </div>
      </>
    );
  };