import React from 'react';
import { MainLocationFilter } from './MainLocationFilter';
import { MainDateFilter } from './MainDateFilter';
import { MainGuestsFilter } from './MainGuestFilter';

export const DynamicFilterComponent = ({ type, onWherePick, onPickedDate , guestCounter, handleImFlexibleClick }) => {
  const renderFilterComponent = () => {
    switch (type) {
      case 'location':
        return <MainLocationFilter onWherePick={onWherePick} />;
      case 'date':
        return <MainDateFilter onPickedDate={onPickedDate} handleImFlexibleClick={handleImFlexibleClick} />;
      case 'guests':
        return <MainGuestsFilter guestCounter={guestCounter} />;
      default:
        return null;
    }
  };
  return (
    <div className="dynamic-filter-component">
      {renderFilterComponent()}
    </div>
  );
};
