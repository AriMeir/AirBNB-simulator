import React, { useEffect } from 'react';

export function ActionButtonWhite({ action, buttonText }) {

  return (
    <div onClick={() => action()}>
      <button className='demo-login-button '>
        <span>
          {buttonText}
        </span>
      </button>
    </div>
  );
}
