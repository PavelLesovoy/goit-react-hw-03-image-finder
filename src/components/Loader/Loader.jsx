import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ThreeDots height="160" width="160" />
    </div>
  );
};
