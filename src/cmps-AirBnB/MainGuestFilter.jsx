import React, { useState } from 'react';
import { GuestCounter } from './GuestCounter';

export const MainGuestsFilter = ({guestCounter}) => {


  return (
    <div className="main-guests-filter flex column">
      <GuestCounter 
        header="Adults"
        subHeader="Ages 13 or above"
        countUp={guestCounter.countUpAdultCounter}
        countDown={guestCounter.countDownAdultCounter}
        counter={guestCounter.adultCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Children"
        subHeader="Ages 2-12"
        countUp={guestCounter.countUpChildrenCounter}
        countDown={guestCounter.countDownChildrenCounter}
        counter={guestCounter.childrenCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Infants" 
        subHeader="Under 2"
        countUp={guestCounter.countUpInfantCounter}
        countDown={guestCounter.countDownInfantCounter}
        counter={guestCounter.infantCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Pets" 
        subHeader="Bringing a Service Animal?"
        countUp={guestCounter.countUpPetCounter}
        countDown={guestCounter.countDownPetCounter}
        counter={guestCounter.petCounter}
        lastOne={true}
      />
    </div>
  );
};
