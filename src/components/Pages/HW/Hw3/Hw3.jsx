import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './switchthemeRedux';





export const Hw3 = () => {
  const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    const themeClass = theme === 'dark' ? 'dark' : 'light';



  return (
   <div className={themeClass}>
   <h1 >
    Приложение для переключения темы сайта
      Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.
      Функционал:
   </h1>
   <p >Action types: TOGGLE_THEME.</p>
   <p >Actions: Создайте действие для переключения темы.</p>
   <p >Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.</p>
   <p >Component: Создайте компонент, который отображает переключатель для изменения темы сайта.
   </p>
   <h1 >Описание:</h1>
   <p >Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").</p>
   <p >Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.</p>
   
   <button onClick={handleToggle}>смена темы через redux</button>

   <h1>коментарий от студента: это очень сложно, надеюсь я больше никогда не буду использовать redux для этих целей</h1>

   
   
   
   
   </div>
  )
}
