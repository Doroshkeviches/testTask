import React from 'react';
import styles from './ErrorMessage.module.scss'
const ErrorMessage = () => {
  return (
    <div className={styles['text']}>
      Что-то пошло не так, обновите страницу или попробуйте позже
    </div>
  );
};

export default ErrorMessage;