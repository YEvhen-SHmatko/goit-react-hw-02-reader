import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Controls.module.css';

export default function Controls({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) {
  return (
    <section className={Styles.section}>
      <button
        className={!prevBtnDisabled ? Styles.button : Styles.disabled}
        type="button"
        onClick={onPrevClick}
        disabled={prevBtnDisabled}
      >
        Назад
      </button>
      <button
        className={!nextBtnDisabled ? Styles.button : Styles.disabled}
        type="button"
        onClick={onNextClick}
        disabled={nextBtnDisabled}
      >
        Вперед
      </button>
    </section>
  );
}
Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};
