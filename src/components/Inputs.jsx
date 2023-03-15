import React, { useState } from 'react';
import { UilSearch, UilLocationArrow } from '@iconscout/react-unicons';
import { toast } from 'react-toastify'

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleSearchClick = () => {
    if (city !== "") setQuery({q: city});
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        if (city !== "") setQuery({q: city});
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
        toast.info('Fetching user`s location.');
        navigator.geolocation.getCurrentPosition((position) => {
            toast.success('Location fetched!');
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            setQuery({
                lat,
                lon,
            });
        });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
            value={city}
            type="text"
            placeholder="Search for location..." 
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:capitalize"
            onChange={(e) => setCity(e.currentTarget.value)}                
            onKeyDown={handleKeyDown} 
        />
            
            <UilSearch 
                size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick}
            />
            <UilLocationArrow 
                size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleLocationClick} 
            />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button 
                name="metric" 
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick={handleUnitsChange}
            >
                °C
            </button>
            <p className="text-xl text-white mx-2">|</p>
            <button 
                name="imperial" 
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick={handleUnitsChange}
            >
                °F    
            </button>  
        </div>
    </div>
  );
}

export default Inputs;