import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Publication.module.css';

const Publication = ({ id, title, text, currentPage }) => {
  return (
    <article id={id} className={Styles.article}>
      <h2 className={Styles.title}>
        {currentPage}. {title}
      </h2>
      <p className={Styles.text}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  currentPage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Publication;
