import React, { PureComponent } from "react";
import "./index.css";

export default class TechCard extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <img
            src={item.image}
            alt={item.alt || item.title}
            className="img-style"
          />
        </div>

        <div className="card-content">
          <b>
            <p className="card-title">{item.title} </p>
          </b>
          <p className="card-subtitle">{item.subtitle} </p>
        </div>
      </div>
    );
  }
}
