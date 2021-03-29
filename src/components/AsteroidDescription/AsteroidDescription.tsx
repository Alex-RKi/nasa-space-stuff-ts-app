
import './AsteroidDescription.scss';


export default function AsteroidDescription(props: any) {
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
        {
          pageMode ?
            <a rel="noreferrer" target="_blank" href={nasa_jpl_url}>
              <h1 className=''>{name}</h1>
            </a>
            : <h1 className=''>{name}</h1>
        }
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
