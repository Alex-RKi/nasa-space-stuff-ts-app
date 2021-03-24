import React from 'react';
import './AsteroidDescription';

interface I_Asteroid {
  links: any;
  id: string;//!
  name: string;//!
  nasa_jpl_url: string;

}
export default function AsteroidDescription(props: any) {
  //const { name, id, estimated_diameter, close_approach_data, is_potentially_hazardous_asteroid, is_sentry_object } = props;
  // const { kilometeres: { estimated_diameter_min, estimated_diameter_max } } = estimated_diameter;
  //const { close_approach_date_full, relative_velocity: { kilometers_per_second }, miss_distance: { kilometers } } = close_approach_data[0];
  console.log(props)
  return (
    <div className='asteroid'>
      <header className='asteroid__name' >
        <div className=''>name</div>
        <div className=''>id</div>
      </header>
      <div className='asteroid__details details'>
        <div className='details__size'>size estimated_diameter_min, estimated_diameter_max</div>
        <div className='details__approach'>
          <div className="approach__date">close_approach_data</div>
          <div className='approach__danger'>hazaard or sentry</div>
          <div className="approach__speed">kilometers_per_second</div>
          <div className="approach__distance">kilometers</div>
        </div>
      </div>
    </div>
  )
}


/* "links": {
  "self": "http://www.neowsapp.com/rest/v1/neo/2277810?api_key=fRIm2mQJlYWtpUipbzuUua6gHcB6mRrvhm0WaX0N"
},
"id": "2277810",
"neo_reference_id": "2277810",
"name": "277810 (2006 FV35)",//!
"nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2277810",
"absolute_magnitude_h": 21.74,
"estimated_diameter": {   //!
  "kilometers": {
    "estimated_diameter_min": 0.1192765246,
    "estimated_diameter_max": 0.2667104172
  },
  "meters": {
    "estimated_diameter_min": 119.2765246442,
    "estimated_diameter_max": 266.7104172244
  },
  "miles": {
    "estimated_diameter_min": 0.0741149734,
    "estimated_diameter_max": 0.1657261187
  },
  "feet": {
    "estimated_diameter_min": 391.3271931138,
    "estimated_diameter_max": 875.0342052466
  }
},
"is_potentially_hazardous_asteroid": false,
"close_approach_data": [
  {
    "close_approach_date": "2021-03-25",
    "close_approach_date_full": "2021-Mar-25 00:28",
    "epoch_date_close_approach": 1616632080000,
    "relative_velocity": {
      "kilometers_per_second": "10.1638332134",
      "kilometers_per_hour": "36589.7995680755",
      "miles_per_hour": "22735.4785149522"
    },
    "miss_distance": {
      "astronomical": "0.3712270076",
      "lunar": "144.4073059564",
      "kilometers": "55534769.623433812",
      "miles": "34507705.7004261256"
    },
    "orbiting_body": "Earth"
  }
],
"is_sentry_object": false
}*/
