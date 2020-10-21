import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "../Tab";

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>

        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export default class Tabs extends Component {
//   state = {};

//   render() {
//     const { activeTab, handleTab, tabs } = this.props;
//     return (
//       <div className="tab-manager">
//         {tabs.map(({ label, value }) => (
//           <div
//             className={`tab ${value === activeTab ? "selected-tab" : ""}`}
//             onClick={() => {
//               handleTab(value);
//             }}
//           >
//             {label}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// Tabs.propTypes = {
//   activeTab: PropTypes.number.isRequired,
//   handleTab: PropTypes.func.isRequired,
//   tabs: PropTypes.arrayOf(Object).isRequired,
// };
