import React from 'react';
import { MainLocationFilter } from './MainLocationFilter';
import { MainDateFilter } from './MainDateFilter';
import { MainGuestsFilter } from './MainGuestFilter';

export const DynamicFilterComponent = ({ type }) => {
  const renderFilterComponent = () => {
    switch (type) {
      case 'location':
        return <MainLocationFilter />;
      case 'date':
        return <MainDateFilter />;
      case 'guests':
        return <MainGuestsFilter />;
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
