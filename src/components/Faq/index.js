import React, { PureComponent } from "react";
import "./index.css";

export default class FAQ extends PureComponent {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { item } = this.props;

    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="title" onClick={this.handleShowDialog}>
            <div className={` ${this.state.isOpen ? "is-open" : "is-close"}`} />
            <h4
              className={`question ${
                this.state.isOpen ? "is-open" : "is-close"
              }`}
            >
              {item.question}
            </h4>

            <button>
              <span
                className={` ${
                  this.state.isOpen ? "span-is-open" : "span-is-close"
                }`}
              ></span>
              <span></span>
            </button>
          </div>

          {(() => {
            if (item.index === item.index) {
              return (
                <div
                  className={`word-wrapper ${
                    this.state.isOpen
                      ? "word-wrapper-is-open"
                      : "word-wrapper-is-close"
                  }`}
                >
                  {this.state.isOpen && (
                    <p className="p-wrapper">
                      {item.answer.map((ans, idx) => (
                        <span key={idx}>{ans}</span>
                      ))}
                    </p>
                  )}
                </div>
              );
            }
          })()}
        </div>
      </React.Fragment>
    );
  }
}
