import './assets/styles.scss';
import { Component, FormEvent, MouseEvent, ChangeEvent } from 'react';
import { HeaderProps } from './types';
import { connect } from 'react-redux';
import {
  setSearch,
  getWeatherByCoords,
  getWeather,
  RootState,
} from '../../store';

class _Header extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ): void {
    e.preventDefault();
    this.props.getWeather(this.props.search);
  }

  handleOnClick(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const successCallback = async (position: {
      coords: { latitude: number; longitude: number };
    }): Promise<void> => {
      const { latitude, longitude } = await position.coords;
      this.props.getWeatherByCoords({ lat: latitude, lon: longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  }

  handleOnChange(e: ChangeEvent<HTMLInputElement>): void {
    this.props.setSearch(e.target.value);
  }

  render(): JSX.Element {
    return (
      <header className="header">
        <div className="header-left">
          <div className="header-logo">Weatherly</div>
        </div>
        <div className="header-right">
          <button onClick={this.handleOnClick} className="btn crosshair">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <form className="header-search-form" onSubmit={this.handleOnSubmit}>
            <input
              onChange={this.handleOnChange}
              type="search"
              placeholder="Enter city/town name"
            />
            <button onClick={this.handleOnSubmit} className="btn glass">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ weatherData }: RootState): { search: string } => {
  return {
    search: weatherData.search,
  };
};

export const Header = connect(mapStateToProps, {
  setSearch,
  getWeatherByCoords,
  getWeather,
})(_Header);
