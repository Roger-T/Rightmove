import React, {useState, useEffect} from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {

    const [propertyData, setPropertyData] = useState(undefined);
 
    useEffect(() => {
        async function fetchData() {
          const searchResult = await fetch('http://localhost:3000/api/properties');
          const searchResultUsable = await searchResult.json();
          setPropertyData(searchResultUsable);
        }
        fetchData();
      }, []); 

    return (
        <ul className="PropertyListing">
            {propertyData?.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))
            }
        </ul>
    );
};

export default PropertyListing;
