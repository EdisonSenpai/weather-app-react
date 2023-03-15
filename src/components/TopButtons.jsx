import React from 'react'


function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title:'Bucharest',
        },
        {
            id:2,
            title:'Iasi',
        },
        {
            id:3,
            title:'Dubai',
        },
        {
            id:4,
            title:'Tokyo',
        },
        {
            id:5,
            title:'New York',
        },
    ]

  return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button 
                key={city.id} 
                className="text-white text-lg font-medium" 
                onClick={() => setQuery({ q: city.title })}
            >
                {city.title}
            </button>
        ))}
    </div>
  );
}

export default TopButtons;