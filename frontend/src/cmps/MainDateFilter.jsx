import React from 'react';
import { BasicRangeShortcuts } from './BasicRangeShortcuts';

export const MainDateFilter = ({onPickedDate, handleImFlexibleClick }) => {
  


  return (
    <div className="main-date-filter">
      <div className='date-tabs'>
        <div className='date-tabs-button active'>Choose Dates</div>
        <div 
          className='date-tabs-button'
          onClick={handleImFlexibleClick}
        >
          I'm Flexible
        </div>
      </div>
      <BasicRangeShortcuts onPickedDate={onPickedDate}/>
    </div>
  );
};
