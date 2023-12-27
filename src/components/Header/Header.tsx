import './assets/styles.scss';
import { ChangeEvent, Component } from 'react';
import { HeaderProps, HeaderState } from './types';
import { connect } from 'react-redux';
import { setSearch, getWeatherByCoords } from '../../store';

class _Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.handleOnChange.bind(this);
    this.handleOnClick.bind(this);
    this.state = {
      search: '',
    };
  }

  handleOnClick() {
    const successCallback = async (position: {
      coords: { latitude: number; longitude: number };
    }) => {
      const { latitude, longitude } = await position.coords;
      getWeatherByCoords({ lat: latitude, lon: longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  }

  handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.setSearch(e.target.value);
  }

  render(): JSX.Element {
    return (
      <header className="header">
        <div className="header-logo">Weatherly</div>
        <form className="header-search-form">
          <button className="btn crosshair">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <input
            onChange={this.props.handleOnChange}
            type="search"
            placeholder="Enter city/town name"
          />
          <button className="btn glass">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </header>
    );
  }
}

export const Header = connect(null, { setSearch, getWeatherByCoords })(_Header);
