import React from 'react'
import s from "./hw1.module.scss"
import { TemperatureConverter } from './TemperatureConverter';
import TodoList from './TodoList';




export const Hw1 = () => {
    
    return (
      <div className={s.hw1content}>

      <h1 className={s.hw1h1}>Домашняя работа 3</h1>

      <p className={s.hw1p}>Задание 1: Температурный конвертер с Material UI</p>
      <p className={s.hw1p}>Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.</p>
      <p className={s.hw1p}>Компоненты: Используйте TextField для ввода значения температуры. Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).</p>
      <p className={s.hw1p}>Логика: При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом. Реализуйте конвертацию температур в обоих направлениях.</p>
      <TemperatureConverter></TemperatureConverter>
      <p style={{border:"1px solid white",color: 'white',fontSize:"20px"}}>коментарий от студента:   условие как мне кажется с ошибкой конвертация должна быть по КНОПКЕ а не автоматической.Иначе когда мы пытаемся стереть она постоянно прыгает по значением а это неправильно мы же добавили кнопку
        
      </p>
      
      <p className={s.hw1h1}>Задание 2: Список дел с Material UI</p>
      <p className={s.hw1p}>Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.</p>
      <p className={s.hw1p}>Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).</p>
      <p className={s.hw1p}>Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.</p>
      <TodoList></TodoList>
      
      </div>

    

    );
  };
