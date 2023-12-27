import { Component } from 'react';
import { CurrentWeatherProps } from './types';

export class CurrentWeather extends Component<CurrentWeatherProps> {
  get hwp() {
    return [
      {
        name: 'Humidity',
        icon: 'fa-solid fa-droplet',
        value: `${this.props.hwp.main.humidity}%`,
      },
      {
        name: 'Wind',
        icon: 'fa-solid fa-wind',
        value: `${this.props.hwp.wind.speed}m/s`,
      },
      {
        name: 'Pressure',
        icon: 'fa-solid fa-gauge-high',
        value: `${this.props.hwp.main.pressure}hPa`,
      },
    ];
  }

  get temps() {
    return [
      {
        icon: 'fa-solid fa-up-long',
        value: Math.round(this.props.hwp.main.temp_max),
      },
      {
        icon: 'fa-solid fa-down-long',
        value: Math.round(this.props.hwp.main.temp_min),
      },
    ];
  }

  renderTemps(): JSX.Element[] {
    return this.temps.map((item, idx): JSX.Element => {
      return (
        <div key={idx} className="temp">
          <i className={item.icon}></i>
          <span className="value">{item.value}°</span>
        </div>
      );
    });
  }

  renderHWP(): JSX.Element[] {
    return this.hwp.map((item): JSX.Element => {
      return (
        <div key={item.name} className="hwp">
          <i className={item.icon}></i>
          <span className="label">{item.name}</span>
          <span className="value">{item.value}</span>
        </div>
      );
    });
  }

  render(): JSX.Element {
    return (
      <section className="current-weather">
        <h4 className="current-weather-header">Current Weather</h4>
        <div className="current-weather-info">
          <div className="info-left">
            <h3 className="city-name">{this.props.city}</h3>
            <div className="city-temp">
              <img
                src={`http://openweathermap.org/img/wn/${this.props.weather.icon}.png`}
                alt={this.props.city}
              />
              <h1 className="city-temp-value">
                {Math.round(this.props.hwp.main.temp)}°
              </h1>
            </div>
            <h3 className="description">{this.props.weather.description}</h3>
          </div>
          <div className="info-right">
            <h4 className="feel">
              Feels like {Math.round(this.props.hwp.main.feels_like)}°
            </h4>
            <div className="temps">{this.renderTemps()}</div>
            {this.renderHWP()}
          </div>
        </div>
      </section>
    );
  }
}
