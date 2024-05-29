import React from 'react';

function ChefCard({ name, specialty, image }) {
  return (
    <div className="chef">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Specialty: {specialty}</p>
    </div>
  );
}

export default ChefCard;
