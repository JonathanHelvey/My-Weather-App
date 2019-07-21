import React, { Component } from "react";

class WeatherApi extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>{`Location: ${this.props.city}, ${this.props.country}`}</p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
        {this.props.description && <p>conditions: {this.props.description}</p>}
      </div>
    );
  }
}

export default WeatherApi;
