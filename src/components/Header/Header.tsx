import { Component } from 'react';

class _Header extends Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <div className="header-logo">Weatherly</div>
        <form className="header-search-form">
          <button>
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <input type="search" placeholder="Enter city/town name" />
          <button>
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
        </form>
      </header>
    );
  }
}
