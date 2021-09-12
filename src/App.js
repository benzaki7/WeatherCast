import { useFetch } from './componenets/Hooks'
import Weather from './componenets/Weather';
import { FaCircleNotch } from 'react-icons/fa';
require('dotenv').config();

function App() {
  const API_KEY = process.env.REACT_APP_GEOLOCATION_API_KEY
  const GEOLOCATION_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`

  // Get Ip Geolocation
  const {data: geolocation, isLoading, error} = useFetch(GEOLOCATION_URL)
  console.log(geolocation);


  return (
    <div className="container">
      {error && <div className='error'>{error}</div>}
      {isLoading && <FaCircleNotch className='spinner'/> }
      {geolocation && <Weather geolocation={geolocation} />}
    </div>
  );
}

export default App;



















