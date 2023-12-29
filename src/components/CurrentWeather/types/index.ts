export type CurrentWeatherProps = {
  city: string;
  weather: {
    icon: string;
    description: string;
  };
  hwp: {
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  };
  sys: {
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
