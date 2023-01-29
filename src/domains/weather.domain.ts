export interface WeatherDomain {
  getWeatherByCity: (city: string) => Promise<any>
}
