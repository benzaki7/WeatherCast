const HourlyDetails = ({ weather }) => {

    return (
            <div className="con">
                    {weather.dt_txt.substr(11, 5)}
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                    <h3>{parseInt(weather.main.temp)}°</h3>
                </div>
    )
}

export default HourlyDetails
