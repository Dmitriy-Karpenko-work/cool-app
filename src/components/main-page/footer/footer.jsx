import React, { useContext, useState } from 'react';
import s from './footer.module.scss';
import { useTheme } from '../../../contexts/ThemeContext';

// import { Modal } from './modal';
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!проблема в импорте файла
//я хз почему не работает




export const Footer = () => {
  
  const { theme } = useTheme(); 

  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <footer className={s.footer}>
      <div className={s.infoUser}>
        <div className={s.infoUser__nameWrapper}>
          <p className={s.infoUser__name}>имя:{" "}</p>
          <p className={s.infoUser__nameUser}>имя пользователя</p>
        </div>
        <div className={s.infoUser__emailWrapper}>
          <p className={s.infoUser__email}>email:{" "}</p>
          <p className={s.infoUser__emailuser}>email пользователя</p>
        </div>
        
        <button className={s.infoUser__setting} type="button" onClick={handleModalOpen}>
        open modal
      </button>
      {/* <div>
        {isModalActive && (
          <Modal title="модалка" onClose={handleModalClose}>
            Hello world
          </Modal>
        )}
      </div> */}
      </div>
      <h2>Выбрана тема: {theme}</h2>
      <h1>Footer</h1>
    </footer>
  );
};