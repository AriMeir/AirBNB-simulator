import React from 'react';

const regionsList = [
  { photo: "img/flexible.jpg", regionName: "I'm flexible" },
  { photo: "img/MiddleEast.webp", regionName: "Middle East" },
  { photo: "img/Italy.webp", regionName: "Italy" },
  { photo: "img/UnitedStates.webp", regionName: "United States" },
  { photo: "img/France.webp", regionName: "France" },
  { photo: "img/SouthAmerica.webp", regionName: "South America" }
];

export const MainLocationFilter = ({onWherePick}) => {
  return (
    <div className="main-location-filter">
      <div className='locations-filter-header'>
        Search by region
      </div>
      <div className='locations-photos grid'>
        {regionsList.map((region, index) => (
          <div className='region' key={index}>
            <div className='region-photo-container' onClick={() => onWherePick(region.regionName)} >
              <img className='region-photo' src={region.photo} alt={region.regionName} />
            </div>
            <div className='region-name'>{region.regionName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
