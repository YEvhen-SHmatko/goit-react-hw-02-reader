import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Publication.module.css';

export default function Publication({ id, title, text }) {
  return (
    <article id={id} className={Styles.article}>
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.text}>{text}</p>
    </article>
  );
}

Publication.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
