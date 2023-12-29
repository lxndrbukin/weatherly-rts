import './assets/styles.scss';
import { Component } from 'react';

export class Footer extends Component {
  render(): JSX.Element {
    return (
      <footer className="footer">
        <a
          className="github"
          target="_blank"
          href="https://github.com/lxndrbukin/weatherly-rts"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <span>
          Created with{' '}
          <a target="_blank" href="https://react.dev/">
            React
          </a>
          ,{' '}
          <a target="_blank" href="https://redux-toolkit.js.org/">
            Redux Toolkit
          </a>{' '}
          &{' '}
          <a target="_blank" href="https://openweathermap.org/api">
            OpenWeather API
          </a>
        </span>
      </footer>
    );
  }
}
