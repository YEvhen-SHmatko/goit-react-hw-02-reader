import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Progress.module.css';

export default function Progress({ totalPages, currentPage }) {
  return (
    <p className={Styles.progress}>
      {currentPage}/{totalPages}
    </p>
  );
}
Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
