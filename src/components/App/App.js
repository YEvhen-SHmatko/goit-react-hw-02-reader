import React from 'react';
import Reader from '../Reader/Reader';
import publications from '../../JsonTemporary/publications.json';

export default function App() {
  return (
    <>
      <Reader items={publications} />
    </>
  );
}
