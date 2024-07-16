import React from 'react';
import { BasicRangeShortcuts } from './BasicRangeShortcuts';

export const MainDateFilter = ({onCheckInPick, onCheckOutPick}) => {
  return (
    <div className="main-date-filter">
      <BasicRangeShortcuts onCheckInPick={onCheckInPick} onCheckOutPick={onCheckOutPick}/>
    </div>
  );
};