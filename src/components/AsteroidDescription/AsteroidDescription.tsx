
import './AsteroidDescription.scss';



interface relative_velocityProps {
  kilometers_per_second: string
}
interface miss_distanceProps {
  kilometers: string
}
interface close_approach_dataProps {
  close_approach_date_full: string;
  relative_velocity: relative_velocityProps;
  miss_distance: miss_distanceProps;
}
interface metersProps {
  estimated_diameter_min: number;
  estimated_diameter_max: number
}
interface estimated_diameterProps {
  meters: metersProps;
}
export interface AsteroidDescriptionProps {
  pageMode?: boolean;
  name: string;
  id: string;
  estimated_diameter: estimated_diameterProps;
  close_approach_data: close_approach_dataProps[];
  is_potentially_hazardous_asteroid: boolean;
  nasa_jpl_url: string;
}
interface descriptionProps {
  id?: string;
  data: AsteroidDescriptionProps;
}

export default function AsteroidDescription(props: AsteroidDescriptionProps) {

  const { pageMode, name, id, estimated_diameter, close_approach_data, is_potentially_hazardous_asteroid, nasa_jpl_url } = props;
  const { meters: { estimated_diameter_min, estimated_diameter_max } } = estimated_diameter;
  const { close_approach_date_full, relative_velocity: { kilometers_per_second }, miss_distance: { kilometers } } = close_approach_data[0];
 
  const roundSpeed = convertAndCut(kilometers_per_second);
  const roundSizeMin = convertAndCut(estimated_diameter_min);
  const roundSizeMax = convertAndCut(estimated_diameter_max);
  const roundDistance = convertAndCut(kilometers)
  const impactRisk = is_potentially_hazardous_asteroid ? 'Yes' : 'No';
  let asteroid__danger = 'asteroid__danger'
  if (is_potentially_hazardous_asteroid) asteroid__danger += '--impact';

  function convertAndCut(raw: string | number) {
    return Math.floor(+raw);
  }

  return (
    <div className='asteroid'>
      <header className='asteroid__name' >
        <a rel="noreferrer" target="_blank" href={nasa_jpl_url}>
          <h1 >{name}</h1>
        </a>
        <div className=''>ID: {id}</div>
      </header>
      <div className='asteroid__details'>
        <div className='asteroid__size'>Estimated size:(nin/max): {roundSizeMin} - {roundSizeMax} meters.</div>
        <div className="asteroid__date">Approach date: {close_approach_date_full}.</div>
        <div className="asteroid__distance">Approach distance: {roundDistance} kilometers.</div>
        <div className="asteroid__speed">Speed: {roundSpeed} km/s.</div>
        <div className={asteroid__danger}>Impact risk: {`${impactRisk}`}.</div>
      </div>
    </div>
  )
}
