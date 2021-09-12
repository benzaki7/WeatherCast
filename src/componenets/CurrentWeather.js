import { AiFillHome } from "react-icons/ai";

const CurrentWeather = ({ weather, unit }) => {
    let today = new Date()
    let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });

    return (
        <div className="current-weather">
            <div className="header">
                <AiFillHome className="home-icon" />
                <h1>{weather.name}</h1>
            </div>
            <p>Current Weather<br /> {time}</p>

            <div className="section-1">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather icon"/>
                <h3>{parseInt(weather.main.temp)}°</h3>
                <p>{weather.weather[0].description}</p>
            </div>

            <div className="section-2">
                <p>Humidity<br /> {weather.main.humidity} %</p>
                <p>Pressure<br /> {weather.main.pressure} mb</p>
                <p>Wind<br /> {unit === "metric" ? <p>{Math.round(weather.wind.speed * 3.6)} km/h</p> : <p>{Math.round(weather.wind.speed)} mph</p>}</p>
                <p>Visibility<br /> {weather.visibility / 1000} Km/h</p>
            </div>
        </div>
    )
}

export default CurrentWeather
