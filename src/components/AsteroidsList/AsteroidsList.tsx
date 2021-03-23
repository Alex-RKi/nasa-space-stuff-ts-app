import React from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './AsteroidsList.scss';
interface I_AsteroidsList {
  list: any;
  showList: (event: React.MouseEvent<HTMLElement>) => void
}

export default function AsteroidsList(props: I_AsteroidsList) {
  const { list, showList } = props;

  const createAsteroidsList = (list: any) => {
    return list.map((item: any): any => {
      const { name, id } = item;
      //console.log(item)
      return <li key={id}>{name}</li>
    })
  }


  return (
    <div>
      <ul className='list' onClick={showList} >
        {/* <Link to={`/description/${id}`}></Link> */}
        {createAsteroidsList(list)}

      </ul>
      <button className='trigger' onClick={showList}>CLOSE</button>
    </div>
  )
}

/*
{
  "0": {
    "links": {
      "self": "http://www.neowsapp.com/rest/v1/neo/2471241?api_key=fRIm2mQJlYWtpUipbzuUua6gHcB6mRrvhm0WaX0N"
    },
    "id": "2471241",
    "neo_reference_id": "2471241",
    "name": "471241 (2011 BX18)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2471241",
    "absolute_magnitude_h": 18.2,
    "estimated_diameter": {
      "kilometers": {
        "estimated_diameter_min": 0.6089126221,
        "estimated_diameter_max": 1.3615700154
      },
      "meters": {
        "estimated_diameter_min": 608.9126221057,
        "estimated_diameter_max": 1361.5700153859
      },
      "miles": {
        "estimated_diameter_min": 0.3783606449,
        "estimated_diameter_max": 0.846040122
      },
      "feet": {
        "estimated_diameter_min": 1997.7448871092,
        "estimated_diameter_max": 4467.0933692788
      }
    },
    "is_potentially_hazardous_asteroid": true,
    "close_approach_data": [
      {
        "close_approach_date": "2021-03-30",
        "close_approach_date_full": "2021-Mar-30 18:22",
        "epoch_date_close_approach": 1617128520000,
        "relative_velocity": {
          "kilometers_per_second": "17.9236425202",
          "kilometers_per_hour": "64525.1130726905",
          "miles_per_hour": "40093.395953417"
        },
        "miss_distance": {
          "astronomical": "0.2221985552",
          "lunar": "86.4352379728",
          "kilometers": "33240430.574997424",
          "miles": "20654645.7906514912"
        },
        "orbiting_body": "Earth"
      }
    ],
    "is_sentry_object": false
  }

*/
