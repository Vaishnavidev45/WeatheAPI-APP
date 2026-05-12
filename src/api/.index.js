const baseURL="https://api.weatherapi.com/v1/current.json?key=6d9dfb5c7ccd491d8aa163723261004&q=London&aqi=no"


export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`$(baseURL)&q{city}&aqi=yes`)
    return await response.json();
};