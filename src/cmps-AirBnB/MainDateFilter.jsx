import React from 'react';
import { BasicRangeShortcuts } from './BasicRangeShortcuts';

export const MainDateFilter = ({onCheckInPick, onCheckOutPick, onPickedDate}) => {
  return (
    <div className="main-date-filter">
      <BasicRangeShortcuts onPickedDate={onPickedDate}/>
    </div>
  );
};