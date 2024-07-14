import React, { useState } from 'react';
import { GuestCounter } from './GuestCounter';

export const MainGuestsFilter = () => {
  // State for each counter
  const [adultCounter, setAdultCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [infantCounter, setInfantCounter] = useState(0);
  const [petCounter, setPetCounter] = useState(0);

  // Functions to increase and decrease counters
  const countUpAdultCounter = () => setAdultCounter(adultCounter + 1);
  const countDownAdultCounter = () => setAdultCounter(adultCounter > 0 ? adultCounter - 1 : 0);

  const countUpChildrenCounter = () => setChildrenCounter(childrenCounter + 1);
  const countDownChildrenCounter = () => setChildrenCounter(childrenCounter > 0 ? childrenCounter - 1 : 0);

  const countUpInfantCounter = () => setInfantCounter(infantCounter + 1);
  const countDownInfantCounter = () => setInfantCounter(infantCounter > 0 ? infantCounter - 1 : 0);

  const countUpPetCounter = () => setPetCounter(petCounter + 1);
  const countDownPetCounter = () => setPetCounter(petCounter > 0 ? petCounter - 1 : 0);

  return (
    <div className="main-guests-filter flex column">
      <GuestCounter 
        header="Adults"
        subHeader="Ages 13 or above"
        countUp={countUpAdultCounter}
        countDown={countDownAdultCounter}
        counter={adultCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Children"
        subHeader="Ages 2-12"
        countUp={countUpChildrenCounter}
        countDown={countDownChildrenCounter}
        counter={childrenCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Infants" 
        subHeader="Under 2"
        countUp={countUpInfantCounter}
        countDown={countDownInfantCounter}
        counter={infantCounter}
        lastOne={false}
      />
      <GuestCounter 
        header="Pets" 
        subHeader="Bringing a Service Animal?"
        countUp={countUpPetCounter}
        countDown={countDownPetCounter}
        counter={petCounter}
        lastOne={true}
      />
    </div>
  );
};
