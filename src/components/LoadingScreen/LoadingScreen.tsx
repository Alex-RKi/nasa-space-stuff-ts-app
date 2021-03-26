
import Spinner from '../Spinner'
import './LoadingScreen.scss';

export default function LoadingScreen() {
  return (
    <div className='screen'>
      <div className='screen__spinner'>
        <Spinner />
      </div>
    </div>
  )
}
