import { Component } from 'react';
import { DayProps } from './types';

export class Day extends Component<DayProps> {
  render(): JSX.Element {
    return (
      <div className="day">
        <h2>{this.props.day}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${this.props.icon}.png`}
          alt={this.props.day}
        />
        <h4 className="desc">{this.props.description}</h4>
        <span>{Math.round(this.props.main.temp)}°</span>
      </div>
    );
  }
}
