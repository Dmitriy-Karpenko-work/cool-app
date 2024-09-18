import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { HW2mainpage } from './HW2mainpage'
import { HW2aboutus } from './HW2aboutus'
import s from './hw2.module.scss';
const styleActiveLink = ({ isActive }) => {
        
  return isActive ? `${s.link} ${s.active}` : s.link;
};
export const Hw2 = () => {
  return (
    <>
    <h1>Домашняя работа 4</h1>
    <nav className={s.nav_hw}>
      <NavLink className={styleActiveLink} to="/HW/2/HW2mainpage">
        главная страница
      </NavLink>
      <NavLink className={styleActiveLink} to="/HW/2/HW2aboutus">
        о нас
      </NavLink>
      
    </nav>
    <div className={s.hw2Content}>
      <Routes>
        <Route path="/HW2mainpage" element={<HW2mainpage />} />
        <Route path="/HW2aboutus" element={<HW2aboutus />} />
      </Routes>
    </div>
  </>
  )
}
