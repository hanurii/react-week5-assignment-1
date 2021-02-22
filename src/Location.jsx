import React from 'react';

export default function Location({ locations }) {
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}><button type="button">{location.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
