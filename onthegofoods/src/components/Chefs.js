import React from 'react';
import ChefCard from './ChefCard'; 

const chefsData = [
  {
    name: 'Chef John Smith',
    specialty: 'Italian Cuisine',
    image: 'path/to/your/image1.jpg'
  },
  {
    name: 'Chef Ali',
    specialty: 'Swahili Cuisine',
    image: 'path/to/your/image2.jpg'
  },
  // Add more chef data as needed
];

function ChefsPage() {
  return (
    <div className="chefs-page">
      <h1>Chefs</h1>
      <div className="chef-cards-container">
        {chefsData.map((chef, index) => (
          <ChefCard
            key={index}
            name={chef.name}
            specialty={chef.specialty}
            image={chef.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ChefsPage;
