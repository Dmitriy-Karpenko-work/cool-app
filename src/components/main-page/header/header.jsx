import React from 'react'
import s from "./header.module.scss"
import { NavLink } from 'react-router-dom';
import { styleActiveLink } from '../../utils/utils_isActive';


export const Header = () => {
    const styleActiveLink = ({ isActive }) => {
        
        return isActive ? `${s.link} ${s.active}` : s.link;
      };
      
  return (
    <header>
        <nav className={s.nav}>
              
            <NavLink className={styleActiveLink} to="/">
              Главная
            </NavLink>
            <NavLink className={styleActiveLink} to="/HW/*">
              Домашняя работа
            </NavLink>
            <NavLink className={styleActiveLink} to="/lecture/*">
              Лекции
            </NavLink>
            <NavLink className={styleActiveLink} to="/seminar/*">
              Семинары
            </NavLink>
            <NavLink className={styleActiveLink} to="/practice/*">
              практика
            </NavLink>
        </nav>
    </header>
  )
}
