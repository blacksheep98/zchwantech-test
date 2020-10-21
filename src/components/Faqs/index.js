import React, { PureComponent } from "react";
import Faq from "../Faq/index";
import "./index.css";

export default class PortfolioCards extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Faq item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
