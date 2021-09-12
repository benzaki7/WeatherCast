import HourlyDetails from './HourlyDetails'

const HourlyWeather = ({ hourlyWeather }) => {

    return (
        <div className="hourly">
            {hourlyWeather && hourlyWeather.list.map(weather => (
                <HourlyDetails weather={weather} key={weather.dt} />
            ))}
        </div>
    )
}

export default HourlyWeather
