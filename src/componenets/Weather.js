import { useState, useEffect } from "react";
import { useFetch } from './Hooks'
import CurrentWeather from './CurrentWeather';
import HourlyWeather from "./HourlyWeather";
import Footer from "./Footer";
import { FaSearch } from 'react-icons/fa';
import { FaCircleNotch } from 'react-icons/fa';
require('dotenv').config();

const Weather = ({ geolocation }) => {
    const [city, setCity] = useState('')
    const [query, setQuery] = useState('')
    const [searchDebounce, setSearchDebounce] = useState('');
    const [unit, setUnit] = useState('metric')

    let defaultCity = geolocation.district;

    useEffect(() => {
        if (searchDebounce) {
            setCity(searchDebounce)
        } else {
            setCity(defaultCity)
        }
    }, [searchDebounce, defaultCity])

    const handleSearch = (e) => {
        e.preventDefault();
        if (query && query !== '') {
            setSearchDebounce(query);
        }
        setQuery('')
    }

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    const HOURLY_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=6&appid=${API_KEY}`

    // Get weather data
    const { data: currentWeather, isLoading } = useFetch(CURRENT_WEATHER_URL)
    const { data: hourlyWeather } = useFetch(HOURLY_WEATHER_URL)


    return (
        <div>
            {isLoading && <FaCircleNotch className='spinner' />}
            {currentWeather &&
                <div className="weather-container">
                    <form className="form" onSubmit={handleSearch} >
                        <input type="text" placeholder="Search for location" value={query} onChange={e => setQuery(e.target.value)} />
                        <FaSearch className='search-icon' onClick={handleSearch} />
                    </form>
                    <button className="btn"
                        onClick={() => setUnit('metric')}
                    >°C</button>

                    <button className="btn"
                        onClick={() => setUnit('imperial')}
                    >°F</button>
                    <CurrentWeather weather={currentWeather} unit={unit} />
                    <HourlyWeather hourlyWeather={hourlyWeather} />
                    <Footer />
                </div>
            }
        </div>
    )

}
export default Weather
