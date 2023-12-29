import './assets/styles.scss';
import { Component } from 'react';
import { AppProps } from './types';
import { connect } from 'react-redux';
import { RootState, WeatherProps } from '../store';
import { Header } from './Header/Header';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';
import { Forecast } from './Forecast/Forecast';
import { Footer } from './Footer/Footer';

class _App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.renderCurrent = this.renderCurrent.bind(this);
    this.renderForecast = this.renderForecast.bind(this);
  }

  componentDidMount(): void {
    window.document.title = 'Weatherly';
  }

  renderCurrent(): JSX.Element | null {
    const { current } = this.props.weather;
    if (current) {
      return (
        <CurrentWeather
          city={current.name}
          weather={current.weather[0]}
          hwp={{ main: current.main, wind: current.wind }}
          sys={current.sys}
        />
      );
    }
    return null;
  }

  renderForecast() {
    const { forecast } = this.props.weather;
    if (forecast) {
      return <Forecast list={forecast.list} />;
    }
  }

  render(): JSX.Element {
    return (
      <div className="container">
        <Header />
        {!this.props.loading && this.renderCurrent()}
        {!this.props.loading && this.renderForecast()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({
  weatherData,
}: RootState): { weather: WeatherProps; loading: boolean } => {
  return {
    weather: weatherData.weather,
    loading: weatherData.loading,
  };
};

export const App = connect(mapStateToProps, {})(_App);
