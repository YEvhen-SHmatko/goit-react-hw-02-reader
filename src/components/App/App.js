import React from 'react';
import Reader from '../Reader/Reader';
import publications from '../../db/publications.json';

export default function App() {
  return (
    <>
      <Reader items={publications} />
    </>
  );
}
