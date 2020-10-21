import React, { PureComponent } from "react";
import Card from "../Card";
import "./index.css";

export default class TechCards extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="cards-wrapper">
        <div className="columns">
          {data.map((item, index) => {
            return (
              <div className="column" key={index}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
